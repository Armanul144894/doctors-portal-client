import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Payment from "../../Pages/Payment/Payment";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/appointment",
          element: <Appointment></Appointment>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <DashboardLayout></DashboardLayout>
        </PrivateRoutes>
      ),
      children: [
        {
          path: "/dashboard",
          element: <MyAppointment></MyAppointment>,
        },
        {
          path: "/dashboard/allUsers",
          element: (
            <AdminRoutes>
              <AllUsers></AllUsers>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/addDoctor",
          element: (
            <AdminRoutes>
              <AddDoctor></AddDoctor>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/manageDoctors",
          element: (
            <AdminRoutes>
              <ManageDoctor></ManageDoctor>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/payment/:id",
          element: <Payment></Payment>,
          loader: ({ params }) => {
            return fetch(
              `https://doctors-portal-server-mauve-chi.vercel.app/bookings/${params._id}`
            );
          },
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Routes;
