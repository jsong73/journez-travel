import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

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
        
        <div>
            <h1>Sign up</h1>

            {data ? (
                <div>
                Your account has successfully been created. You will now be directed to the homepage.
                </div>
            ) : (
            <form onSubmit= {signupFormHandler}>
                <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    value= {formState.email}
                    onChange={handleChange}/>

                <input
                    className="relative block w-full appearance-none rounded-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Username"
                    name="username"
                    type="username"
                    autoComplete="off"
                    value= {formState.username}
                    onChange={handleChange}/>
        
                <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    value= {formState.password}
                    onChange={handleChange}/>
        
                <button type="submit"> Create account </button>     
            </form>
            )}

        {error && (
          <div> Account already exists. Please log in or choose another email. </div>
        )}

        </div>
    )
}

export default Signup;