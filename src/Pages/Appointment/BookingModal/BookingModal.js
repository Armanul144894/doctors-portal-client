import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
  const { name, slots, price } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      phone,
      email,
      slot,
      price,
    };
    console.log(booking);

    fetch("https://doctors-portal-server-mauve-chi.vercel.app/bookings", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirm");
          refetch();
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal w-full">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid gap-5 w-full mt-8">
            <input
              name="date"
              type="text"
              defaultValue={`${format(selected, "PP")}`}
              readOnly
              className="input input-bordered input-sm w-full py-5"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              required
              placeholder="Full Name"
              className="input input-bordered input-sm w-full py-5"
            />
            <input
              type="number"
              name="phone"
              required
              placeholder="Phone Number"
              className="input input-bordered input-sm w-full py-5"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              required
              placeholder="Your Email"
              className="input input-bordered input-sm w-full py-5"
            />
            <input
              className="btn btn-accent text-white font-bold input-bordered input-md w-full"
              type="submit"
              value="submit"
            />
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default BookingModal;
