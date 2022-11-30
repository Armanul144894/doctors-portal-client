import React from "react";

const Review = ({ review }) => {
  const { img, name, reviewText, location } = review;
  return (
    <div className="card shadow-lg text-primary-content">
      <div className="card-body">
        <p className="text-justify">{reviewText}</p>
        <div className="card-actions items-center mt-8">
          <div className="avatar">
            <div className="w-16 mr-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
