import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { checkValidEmail } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import HeaderComponent from "../ui/HeaderComponent";


type Details = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [errorMessage, setIsErrorMessage] = useState<string | null>(null);
  const [details, setDetails] = useState<Details>({
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signUp = isSignUp ? "Already an user!" : "New to Netflix?";
  const signBtn = isSignUp ? "Sign Up" : "Sign In";
  const signUpLink = isSignUp ? "Sign in now" : "Sign up now";

  function handleLoginPage() {
    setIsSignUp((prevVal) => !prevVal);
  }

  function handleValidate() {
    if (details.email && details.password) {
      const message = checkValidEmail(details.email);
      setIsErrorMessage(message);

      if (message) return;

      if (isSignUp) {
        //Signup Logic
        createUserWithEmailAndPassword(auth, details.email, details.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current?.value,
            })
              .then(() => {
                // Profile updated!
                navigate("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsErrorMessage(errorCode + "-" + errorMessage);
              });
          })
          .catch((error) => {
            //Error Occurs
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        //Sign in Logic

        signInWithEmailAndPassword(auth, details.email, details.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User LoggedIn = ", user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="absolute">
      <HeaderComponent />
      <form
        onSubmit={handleSubmit}
        className="absolute w-full md:w-1/2 lg:w-1/4 p-12 text-white bg-black top-0 mx-auto left-0 right-0 my-44 rounded-lg bg-opacity-85 "
      >
        <p className="text-2xl md:text-3xl pb-4 pl-2 font-semibold">
          {signBtn}
        </p>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md"
            required
          />
        )}
        <input
          value={details.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter Email"
          className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md"
          required
        />
        <input
          value={details.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="******"
          className="p-3 my-2 w-full bg-transparent border-2 border-gray-400 rounded-md"
          required
        />
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          onClick={handleValidate}
          className="w-full p-2 my-4 bg-red-700 rounded-lg"
        >
          {signBtn}
        </button>
        {!isSignUp && (
          <div className="flex flex-col items-center">
            <p>OR</p>
            <Link to="/forgot-password">
              <p className="cursor-pointer">Forgot password?</p>
            </Link>
          </div>
        )}
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
