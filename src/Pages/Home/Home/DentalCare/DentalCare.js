import React from "react";
import treatment from "../../../../assets/images/treatment.png";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero w-3/4 mx-auto mt-40">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <img
          src={treatment}
          className="lg:w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            An ideal dentist goes to great lengths to make their patients
            comfortable and relaxed without pain. An ideal dentist has a keen
            ability to distill complex procedures and processes into simple
            language so that the patient can understand exactly what is going on
            in his or her mouth and any procedures that they suggest.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
