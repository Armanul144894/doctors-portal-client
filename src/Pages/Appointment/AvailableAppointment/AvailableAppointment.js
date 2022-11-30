import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, "PP");

  //   const { data: appointmentOptions = [] } = useQuery({
  //     queryKey: ["appointmentOptions"],
  //     queryFn: () =>
  //       fetch(`http://localhost:5000/appointmentOptions`).then((res) =>
  //         res.json()
  //       ),
  //   });

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mt-10">
      <p className="text-center text-secondary font-bold">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-24">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            selected={selected}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
