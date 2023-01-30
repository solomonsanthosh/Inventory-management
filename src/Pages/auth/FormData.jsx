import React, { useState, useEffect } from "react";
import { Navigate, Router } from "react-router-dom";
import { checkLogin, login } from "../../Axios/user";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../slice/userSlice";
function FormData() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [trigger, setTrigger] = useState(false);
  const [textErr, setTextErr] = useState(null);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    // if (localStorage.getItem("jwt")) {
    //   checkLogin(localStorage.getItem("jwt")).then((res) => {
    //     if (res?.status == 200) {
    //       navigate("/ticketform");
    //     }
    //   });
    // }

    if (password.length > 0 && name.length > 0) {
      setTextErr(false);
    } else {
      setTextErr(true);
    }
  }, [trigger]);

  const submitLogin = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      password: password,
    };
    login(user).then((res) => {
      console.log(res);
      if (res?.data.user.role == "admin") {
        dispatch(setCredentials({ user: res.data.user }));
        navigate("/manager");
      } else if (res?.data.user.role == "local") {
        dispatch(setCredentials({ user: res.data.user }));
        navigate("/local");
      } else {
        if (res?.data.message == "success") {
          dispatch(
            setCredentials({ user: res.data.user, token: res.data.accessToken })
          );

          navigate("/");
        } else {
          setMsg("Invalid credentials");
        }
      }
    });
  };

  return (
    <form class=" mt-8 mb-0 w-full space-y-4">
      <div>
        <label for="email" class="sr-only">
          Name
        </label>

        <div class="relative w-full">
          <input
            type="text"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
              setTrigger(!trigger);
            }}
          />
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">
          Password
        </label>
        <div class="relative">
          <input
            type="password"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
              setTrigger(!trigger);
            }}
          />

          <span class="absolute inset-y-0 right-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <h2>{msg}</h2>
      <Button
        disabled={textErr}
        onClick={submitLogin}
        variant="contained"
        className=" px-8 py-2 bg-[#3d90c0] text-white rounded-3xl"
      >
        SUBMIT
      </Button>
    </form>
  );
}

export default FormData;
