import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <section
      className=""
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "50px",
      }}
    >
      <div className="mt-10">
        <footer className="footer p-10 px-24">
          <div>
            <span className="footer-title">Services</span>
            <Link to="/" className="link link-hover">
              Emergency Checkup
            </Link>
            <Link to="/" className="link link-hover">
              Monthly Checkup
            </Link>
            <Link to="/" className="link link-hover">
              Weekly Checkup
            </Link>
            <Link to="/" className="link link-hover">
              Deep Checkup
            </Link>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <Link to="/" className="link link-hover">
              Fluoride Treatment
            </Link>
            <Link to="/" className="link link-hover">
              Cavity Filling
            </Link>
            <Link to="/" className="link link-hover">
              Teeth Whitening
            </Link>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <Link to="/" className="link link-hover">
              New York - 101010 Hudson
            </Link>
          </div>
        </footer>
        <footer className="footer footer-center p-4 text-base-content">
          <div>
            <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
