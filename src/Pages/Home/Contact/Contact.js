import React from "react";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className=" my-14 py-20"
      style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
        backgroundPosition: "50px",
      }}
    >
      <div className="card">
        <div className="card-body items-center text-center">
          <h4 className="text-xl font-bold text-secondary">Contact Us</h4>
          <h2 className="text-3xl text-white">Stay connected with us</h2>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-sm w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-sm w-full max-w-xs"
          />
          <textarea
            className="textarea textarea-bordered w-full pb-10 max-w-xs"
            placeholder="Your Message"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Contact;
