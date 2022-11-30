import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, bgClass, icon } = card;
  return (
    <div
      className={`card p-6 md:card-side bg-primary shadow-xl ${bgClass} text-white`}
    >
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
