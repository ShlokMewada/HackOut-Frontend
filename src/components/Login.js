import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addUser from "../redux/userSlice";

const SignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [credentials, setCredentials] = useState();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      setCredentials({
        email: email.current.value,
        password: password.current.value,
      });
    } else {
      setCredentials({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      });
    }
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.tokens.access);
        dispatch(addUser(credentials));
        navigate("/");
      } else {
        alert(data.message);

        // Handle login error
        console.error("Login failed");
        // You might want to show an error message to the user
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle network errors
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-3/12 absolute p-10 border-2 flex flex-col gap-y-5 my-44 mx-auto right-0 left-0 justify-center"
      >
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Enter Name"
            className="p-2 bg-gray-200"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter Email"
          className="p-2 bg-gray-200"
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Password"
          className="p-2 bg-gray-200"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 mx-auto w-32 p-2 rounded-lg text-white"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex gap-2">
          {isSignIn ? <p>New User?</p> : <p>Already Registered?</p>}

          <div
            onClick={toggleSignIn}
            className="hover:underline cursor-pointer"
          >
            {isSignIn ? "Sign Up now" : "Sign In now"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
