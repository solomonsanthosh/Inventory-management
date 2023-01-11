import { useState } from "react";
import React from 'react'
import FormData from "./FormData";

function SignIn() {
    const [isLogin, setLogin] = useState(false)

    const handleClickInSideBar = () => {
        console.log("login is pressed")
        setLogin(!isLogin)
        console.log(isLogin)
    }

    if (isLogin) {
        // Login Page
        return <div className="h-screen bg-bgWhite flex justify-center items-center">
            <div className=" h-3/4 w-9/12 rounded-2xl shadow-2xl flex overflow-hidden">
                <SignInContent text="Log In" />
                <SignInLoginInSideContent isLogin={isLogin} func={handleClickInSideBar} />
            </div>
        </div>
    } else {
        // Sign in Page
        return (
            <div className="h-screen bg-bgWhite flex justify-center items-center">
                <div className=" h-3/4 w-9/12 rounded-2xl shadow-2xl flex overflow-hidden">
                    <SignInContent text="Sign In" />
                    <SignInLoginInSideContent isLogin={isLogin} func={handleClickInSideBar} />
                </div>
            </div>
        );
    }
}

function SignInContent(props) {
    return <div className="sign-in h-full w-4/5 flex justify-center items-center">
        <div className="flex flex-col items-center text-center h-3/5">
            <h1 className="text-highlight text-4xl mb-5 font-semibold">{props.text}</h1>
            <hr className=" border-highlight w-20 mb-10 border-t-8" />
            <FormData val={props.text} />
        </div>
    </div>
}

function SignInLoginInSideContent(props) {
    let text;
    let val;
    if (props.isLogin) {
        text = ""
        val = "Sign In"
    } else {
        text = <h2 className="text-white">Already have an Account ?</h2>
        val = "Log In"
    }
    return <div className="h-full w-2/5 bg-highlight flex justify-center items-center">
        <div className="text-center flex flex-col items-center">
            <h1 className="text-white text-4xl mb-5 font-semibold">Hello!</h1>
            <hr className=" border-white w-20 mb-10 border-t-8" />
            <h2 className="text-white">Fill up the personal information and <br />
                start up your journey with us.</h2>
            {text}
            <button type="submit" className=" m-6 px-8 py-2 bg-highlight
    border-white border-solid border-2 text-white rounded-3xl" onClick={props.func}>
                {val}
            </button>
        </div>
    </div>
}

export default SignIn
