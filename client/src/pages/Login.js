import React, {useState} from "react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import LoginPicture from "../images/loginpage.jpg";

const Login = (props) => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    const [login, {error, data}] = useMutation(LOGIN_USER);
    
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //login form
    const loginFormHandler = async (event) => {
        event.preventDefault();
        try{
            const { data } = await login({
                variables: {...formState}
            });

            Auth.login(data.login.token);
        } catch (error) {
            console.log(error);
        }
        //clears form values
        setFormState({
            email: "",
            password: "",
        });
    };

    return(
        <div className="h-screen">
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            
                    <img 
                        className="w-full"
                        src={LoginPicture} 
                        alt="login-pic" />

                     </div>
     
         <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="mb-8 text-3xl font-bold tracking-tight">Welcome back.</h1>
                   {data ? (
                         <div>
                          You are now logged in. You will now be directed to the homepage.
                         </div>
                        ) : (
   
            <form onSubmit= {loginFormHandler}>
                <div className="mb-6">
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        value= {formState.email}
                        onChange={handleChange}/>
                </div>
                <div className="mb-6">
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Password"
                        name="password"
                        type="password"
                        autoComplete="off"
                        value= {formState.password}
                        onChange={handleChange}/>
                </div>
                    <button 
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" 
                         type="submit"> Sign in </button>    

                <div className="text-sm font-semibold mt-3 pt-1 mb-0"> Don't have an account?
                <Link className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out" to="/signup"> Register </Link></div>
            </form>
            )}
            </div>
        {error && (
          <div>{error.message}</div>
        )}
            </div>
        </div>
    </div>

    
    );
};

export default Login;