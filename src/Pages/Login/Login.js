import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { user, signIn, setUser, googleSignIn, forgetPassword } =
    useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const [loginError, setLoginError] = useState("");

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    setLoginError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoginUserEmail(email);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoginUserEmail();
      })
      .catch((error) => console.log(error));
  };
  const handleForgetPassword = () => {
    forgetPassword(user.email)
      .then((res) => {
        alert("Verify Your email and set new password");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="  flex justify-center items-center ">
      <div className=" my-20 shadow-2xl p-7 w-96  rounded-md">
        <h1 className="text-center text-xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <label className="label">
              <Link onClick={handleForgetPassword} className="label-text">
                Forget Password?
              </Link>
            </label>
          </div>

          <input
            className="btn btn-accent text-white font-bold w-full "
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-3">
          New to Doctors Portal?{" "}
          <Link to="/signUp" className="text-secondary font-bold">
            Create new account
          </Link>
        </p>

        <div className="divider my-5">OR</div>

        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
