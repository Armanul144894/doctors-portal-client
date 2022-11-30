import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const { data } = useLoaderData();
  return (
    <div>
      <h2>Payment</h2>
      {data.price}
    </div>
  );
};

export default Payment;
