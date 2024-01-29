import React from "react";
import { useForm, useWatch } from "react-hook-form";
import CryptoJS, { SHA256 } from "crypto-js";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, formState, register, getValues, control } = useForm();
  const { errors } = formState;
  let pass = useWatch({ control, name: "password", defaultValue: "" });

  const onSubmit = (formData) => {
    // Hash the password using SHA-256
    // const hashedPassword = SHA256(formData.password).toString(CryptoJS.enc.Hex);
    // Create FormData object
    // const requestObject = new FormData();
    // requestObject.append("username", formData.username);
    // requestObject.append("password", hashedPassword);
    // requestObject.append("grant_type", "password");
    console.log(formData)
    navigate('/home')
  };

  return (
    <div className="container my-5"> 
      <div className="row justify-content-center">
        <div className="col-md-6 border-0 neuo">
          <div className="card shadow-sm bg-transparent rounded-5 border-0">
            {/* <div className="card-header">
              <h3 className="card-title text-center text-primary">
                <b>Login to Continue...</b>
              </h3>
            </div> */}
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
                <div className="mb-1 mt-3">
                  <label htmlFor="username" className="form-label text-primary">
                    <b>Username :</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    {...register("username", {
                      required: "Username is Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.username && (
                  <p className="text-danger mb-2 mt-0 mx-1 font-monospace">
                    {errors.username.message}
                  </p>
                )}
                <div className="mb-1 mt-3">
                  <label htmlFor="password" className="form-label text-primary">
                    <b>Password :</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]+$/,
                        message: "Enter password in suggested pattern",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger mb-2 mt-0 mx-1 font-monospace">
                      {errors.password.message}
                    </p>
                  )}
                  <ul className="mt-3">
                    <li hidden={pass.length >= 8} className="text-danger">
                      Password should be of 8 or more Characters.
                    </li>
                    <li hidden={/[A-Z]/.test(pass)} className="text-danger">
                      Password should contain atleast one UpperCase Letter.
                    </li>
                    <li hidden={/[a-z]/.test(pass)} className="text-danger">
                      Password should contain atleast one Lowercase Letter.
                    </li>
                    <li hidden={/[0-9]/.test(pass)} className="text-danger">
                      Password should contain atleast one Number.
                    </li>
                    <li
                      hidden={/[!@#$%&*:+=]/.test(pass)}
                      className="text-danger"
                    >
                      Password should contain atleast one Symbol (!@#$%&*:+=).
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="text-center mt-3 card-footer border-0">
              <button
                type="submit"
                className="btn btn-primary text-white fw-bold"
                form="loginForm"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;