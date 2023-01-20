import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import SignupPicture from "../images/signuppage.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formState, setFormState] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [addUser, {error, data}] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //sign up form
    const signupFormHandler = async (event) => {
        event.preventDefault();
        try{
            const { data } = await addUser({
                variables: {...formState},
            });
            Auth.login(data.addUser.token);
        } catch (error) {
            console.log(error)
        }
         //clears form values
        setFormState({
            email:"",
            username:"",
            password:"",
        })
    };

    return(
        
        <div className="h-screen">
            <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl py-10 px-6 lg:flex lg:items-center lg:justify- 
                between lg:py-10 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Going on a trip?</span>
                        <span className="block text-blue-600">Create an account to get started. 
                        </span>
                    </h1>
                </div>
            </div>
             <div className="container px-6">
                 <div className="flex justify-center items-center flex-wrap">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">

                    <img 
                        className="w-full"
                        src={SignupPicture} 
                        alt="signup-pic" />
                    </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <h1 className="mb-8 text-3xl font-bold tracking-tight">Sign up. </h1>

                    {data ? (
                        <div>
                        Your account has successfully been created. You will now be directed to 
                        the homepage.
                        </div>
                        ) : (
            <form onSubmit= {signupFormHandler}>
                <div className="mb-6">
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text- 
                        gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                        focus:border-blue-600 focus:outline-none"
                        placeholder="Email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        value= {formState.email}
                        onChange={handleChange}/>
                </div>

                <div className="mb-6">
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text- 
                        gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                        focus:border-blue-600 focus:outline-none"
                        placeholder="Username"
                        name="username"
                        type="username"
                        autoComplete="off"
                        value= {formState.username}
                        onChange={handleChange}/>
                </div>
                <div className="mb-6">
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text- 
                        gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                        focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        value= {formState.password}
                        onChange={handleChange}/>
                </div>

            {error && (
            <div className="mb-4 text-sm text-red-700 rounded dark:text-red-400"> Account already  
            exists. Please log in or choose another email. </div>
            )}
                <button 
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm 
                    leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg- 
                    blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" 
                    type="submit"> Create account </button>     


                <div className="text-sm font-semibold mt-3 pt-1 mb-0"> Already have an account?
                <Link className="text-red-600 hover:text-red-700 focus:text-red-700 transition 
                duration-200 ease-in-out" to="/"> Log in </Link></div>

            </form>
            )}
            </div>
 
            </div>
        </div>
        
    </div>

    
    )
}

export default Signup;