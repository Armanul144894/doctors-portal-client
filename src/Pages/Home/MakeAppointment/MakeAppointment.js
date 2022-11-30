import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className=" mt-60"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg"
            alt=""
          />
          <div>
            <h4 className="text-xl text-secondary font-bold">Appointment</h4>
            <h1 className="text-4xl text-white font-bold">
              Make an appointment Today
            </h1>

            <p className="py-6 text-white">
              Both doctor's appointment and doctor appointment are acceptable
              for describing a medical visit. In the first case the 's, instead
              of showing possession, is actually showing association;
              appointments of this nature are associated with doctors.
            </p>
            <PrimaryButton>Make Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
