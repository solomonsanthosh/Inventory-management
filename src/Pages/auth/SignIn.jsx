import { useState } from "react";
import React from "react";
import FormData from "./FormData";

function SignIn() {
  // const [isLogin, setLogin] = useState(false)

  // const handleClickInSideBar = () => {
  //     console.log("login is pressed")
  //     setLogin(!isLogin)
  //     console.log(isLogin)
  // }

  // if (isLogin) {
  // Login Page
  return (
    <div className="h-screen bg-bgWhite flex justify-center items-center">
      <div className=" h-3/4 w-9/12 rounded-2xl shadow-2xl flex overflow-hidden">
        <SignInContent  />
        <SignInLoginInSideContent/>
      </div>
    </div>
  );
  // } else {
  //     // Sign in Page
  //     return (
  //         <div className="h-screen bg-bgWhite flex justify-center items-center">
  //             <div className=" h-3/4 w-9/12 rounded-2xl shadow-2xl flex overflow-hidden">
  //                 <SignInContent text="Sign In" />
  //                 <SignInLoginInSideContent isLogin={isLogin} func={handleClickInSideBar} />
  //             </div>
  //         </div>
  //     );
  // }
}

function SignInContent() {
  return (
    <div className="sign-in h-full w-4/5 sm:w-full flex justify-center items-center">
      <div className="flex flex-col items-center text-center h-3/5">
        <h1 className="text-[#3d90c0] text-4xl mb-5 font-semibold">
          Login
        </h1>
        <hr className=" border-[#3d90c0] w-20 mb-10 border-t-8" />
        <FormData />
      </div>
    </div>
  );
}

function SignInLoginInSideContent(props) {
  
  return (
    <div className="h-full w-2/5 bg-highlight flex justify-center items-center sm:hidden">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-white text-4xl mb-5 font-semibold">Hello!</h1>
        <hr className=" border-white w-20 mb-10 border-t-8" />
        <h2 className="text-white">
          Fill up the personal information and <br />
          start up your journey with us.
        </h2>
        {/* Log in
        <button
          type="submit"
          className=" m-6 px-8 py-2 bg-highlight
    border-white border-solid border-2 text-white rounded-3xl"
          onClick={props.func}
        >
          Log in
        </button> */}
      </div>
    </div>
  );
}

export default SignIn;
