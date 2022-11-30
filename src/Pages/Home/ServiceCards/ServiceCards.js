import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import teeth from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.",
      icon: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "A filling is used to treat a small hole, or cavity, in a tooth.",
      icon: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white.",
      icon: teeth,
    },
  ];
  return (
    <>
      <div className="text-center mt-28">
        <h4 className="text-secondary text-2xl font-bold">Our Services</h4>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default ServiceCards;
