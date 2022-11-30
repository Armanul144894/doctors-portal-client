import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className="mx-5">
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointment selected={selected}></AvailableAppointment>
    </div>
  );
};

export default Appointment;
