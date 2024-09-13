import { useRef, useState } from "react";
import { checkValidEmail } from "./utils/validate";
import HeaderComponent from "./ui/HeaderComponent";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [errorMessage, setIsErrorMessage] = useState<string | null>(null);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const signUp = isSignUp ? "Already an user!" : "New to Netflix?";
  const signBtn = isSignUp ? "Sign Up" : "Sign In";
  const signUpLink = isSignUp ? "Sign in now" : "Sign up now";

  function handleLoginPage() {
    setIsSignUp(!isSignUp);
  }

  function handleButtonClick() {
    if (email.current && password.current) {
      console.log("email = ", email.current.value);
      console.log("password = ", password.current.value);
      const message = checkValidEmail(email.current.value);
      setIsErrorMessage(message);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="absolute">
      <HeaderComponent />
      <form
        onSubmit={handleSubmit}
        className="absolute w-1/4 p-12 text-white bg-black top-0 mx-auto left-0 right-0 my-44 rounded-lg bg-opacity-85 "
      >
        <p className="text-3xl pb-4 pl-2 font-semibold">{signBtn}</p>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="******"
          className="p-3 my-2 w-full bg-transparent border-2 border-gray-400 rounded-md"
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          onClick={handleButtonClick}
          className="w-full p-2 my-4 bg-red-700 rounded-lg"
        >
          {signBtn}
        </button>
        {!isSignUp && <div className="flex flex-col items-center">
          <p>OR</p>
          <Link to="/forgot-password">
            <p className="cursor-pointer">Forgot password?</p>
          </Link>
        </div>}
        {}
        <p className="text-gray-400 mt-5">
          {signUp}
          <span
            onClick={handleLoginPage}
            className="ml-2 text-white cursor-pointer"
          >
            {signUpLink}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

//01:51:41
