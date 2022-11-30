import React from "react";

const AppointmentOption = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 0 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions">
          <label
            disabled={slots.length === 0}
            className="btn btn-secondary text-white font-bold"
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
