import { useState } from "react";
import Header from "./Header";

 const Login:React.FC = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    function handleLoginPage(){
        setIsSignUp(!isSignUp);
    }

    const signUp = isSignUp ?  "Already an user!" : "New to Netflix?";
    const signBtn = isSignUp ?  "Sign Up" : "Sign In";
    const signUpLink = isSignUp ? "Sign in now" : "Sign up now";
    return (
        <div className="absolute w-screen h-auto bg-gradient-to-b from-black">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg"
            alt="background_img" className="bg-gradient-to-b from-black" />
            <Header />
            <form className="absolute w-1/4 p-12 text-white bg-black top-0 mx-auto left-0 right-0 my-44 rounded-lg bg-opacity-85 ">
                <p className="text-3xl pb-4 pl-2 font-semibold">Sign In</p>
                {isSignUp && <input type="text" placeholder="Enter Name" className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md" /> }
                <input type="email" placeholder="Enter Email" className="p-3 my-2 w-full border-2 border-gray-400 bg-transparent rounded-md" />
                <input type="password" placeholder="******" className="p-3 my-2 w-full bg-transparent border-2 border-gray-400 rounded-md" />
                <button className="w-full p-2 my-4 bg-red-700 rounded-lg">{signBtn}</button>
                <div className="flex flex-col items-center">
                    <p>OR</p>
                    <p className="cursor-pointer">Forgot password?</p>
                </div>
                {}
                <p className="text-gray-400 mt-5">{signUp}<span onClick={handleLoginPage} className="ml-2 text-white cursor-pointer">{signUpLink}</span></p>
            </form>
        </div>
    )
}

export default Login;