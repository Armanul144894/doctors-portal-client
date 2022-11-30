import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  console.log(imageHostKey);
  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-mauve-chi.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch("https://doctors-portal-server-mauve-chi.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="shadow-2xl p-7 w-96 rounded-sm mx-auto">
      <h1 className="text-2xl font-bold my-5">Add Doctor</h1>

      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            required
            {...register("name")}
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Email Address is required" })}
            className="input input-bordered w-full "
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            required
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Please Pick a Specialty
            </option>
            {specialties.map((specialty) => (
              <option key={specialty._id}>{specialty.name}</option>
            ))}
          </select>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            required
            {...register("image")}
            className="input input-bordered w-full "
          />
        </div>
        {errors.image && <p className="text-red-600">{errors.img?.message}</p>}

        <input
          className="btn  btn-accent my-5 text-white font-bold w-full "
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
