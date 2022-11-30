import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review/Review";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      reviewText:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "California",
    },
    {
      id: 2,
      name: "Cavity Filling",
      reviewText:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: "California",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      reviewText:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: "California",
    },
  ];
  return (
    <section className="mt-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary text-xl font-bold">Testimonial</h4>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
