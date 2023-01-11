
function Manager() {
  return (
    //  main container
    <div className="h-screen bg-bgWhite flex justify-center items-center">
      {/* The front card - sign in page */}
      <div className=" h-3/4 w-9/12 rounded-2xl shadow-2xl flex overflow-hidden">
        <SignInContent text="Sign In"></SignInContent>
        <SignInLoginInSideContent></SignInLoginInSideContent>
      </div>
      {/* The back card login page */}
      {/* <div className=" h-3/4 w-9/12 rounded-2xl shadow-2xl flex overflow-hidden">
        <SignInContent text="Log In"></SignInContent>
        <SignInLoginInSideContent></SignInLoginInSideContent>
      </div> */}
    </div>
  );
}

function SignInContent(props) {
  return <div className="sign-in h-full w-4/5 flex justify-center items-center">
    <div className="flex flex-col items-center text-center h-3/5">
      <h1 className="text-highlight text-4xl mb-5 font-semibold">{props.text}</h1>
      <hr className=" border-highlight w-20 mb-10 border-t-8" />
      <EmailPasswordForm></EmailPasswordForm>
    </div>
  </div>
}

function EmailPasswordForm() {
  return <form action="" class=" mt-8 mb-0 w-full space-y-4">
    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative w-full">
        <input
          type="email"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter email"
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
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>
      <div class="relative">
        <input
          type="password"
          class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Enter password"
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
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div>
        <input type="checkbox" name="remember-me" id="remember-me" />
        <label htmlFor="remember-me" className="text-base font-medium ">  Remember Me</label>
      </div>

      <button
        type="submit"
        class="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium"
      >
        Login in
      </button>
    </div>
    <button type="submit" className=" px-8 py-2 bg-highlight text-white rounded-3xl">SUBMIT</button>
  </form>
}

function SignInLoginInSideContent() {
  return <div className="h-full w-2/5 bg-highlight flex justify-center items-center">
    <div className="text-center flex flex-col items-center">
      <h1 className="text-white text-4xl mb-5 font-semibold">Hello!</h1>
      <hr className=" border-white w-20 mb-10 border-t-8" />
      <h2 className="text-white">Fill up the personal information and <br />
        start up your journey with us.</h2>
      <h2 className="text-white">Already have an Account ?</h2>
      <button type="submit" className=" m-6 px-8 py-2 bg-highlight
    border-white border-solid border-2 text-white rounded-3xl">LOG IN</button>
    </div>
  </div>
}

export default Manager;
