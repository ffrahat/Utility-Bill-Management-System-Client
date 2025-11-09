import React from "react";
import { Link, Navigate, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {

  const { user, setLoading, loginWithGoogle } = useAuth();
  console.log(user, loginWithGoogle);

  // Navigate home
  const navigate = useNavigate();


  // Google Login
  const handleGoogleSingIn = () => {
    loginWithGoogle()
      .then(() => {
        toast("login Sussefully.")
        navigate('/');
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      })
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-2">
            <h1 className="text-4xl font-bold">Login now!</h1>
          </div>
          <p className="text-center mb-1 p-1">
            Don't have an Account?
            <span className="text-blue-500">
              {" "}
              <Link to="/registar">Registar Now</Link>
            </span>
          </p>
          <form action="">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover text-blue-500">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>

          <div className="my-2 text-center">or</div>

          <button
            onClick={handleGoogleSingIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
