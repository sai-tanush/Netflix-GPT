import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkValidEmail } from "./utils/validate";
import HeaderComponent from "./ui/HeaderComponent";

const ForgotPassword: React.FC = () => {
  const [errorMessage, setIsErrorMessage] = useState<string | null>(null);
  const email = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    if (email.current) {
      console.log("email = ", email.current.value);
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
        <p className="text-3xl pb-4 pl-2 font-semibold">Forgot Password?</p>
        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md"
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          onClick={handleButtonClick}
          className="w-full p-2 my-4 bg-red-700 rounded-lg"
        >
          Send Link
        </button>
        <Link to="/login">
          <p className="text-gray-400 mt-5">Back to <span className="text-white">Sign in page</span></p>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
