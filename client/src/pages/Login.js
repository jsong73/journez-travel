import React, {useState} from "react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

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
        <div>
            <h1>Sign in</h1>

            <div> Or{' '}
             <Link to="/signup"> create a new account </Link>
            </div>

         {data ? (
                <div>
                You are now logged in. You will now be directed to the homepage.
                </div>
            ) : (
            <form onSubmit= {loginFormHandler}>
                <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    autoComplete="off"
                    value= {formState.email}
                    onChange={handleChange}/>
        
                <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    autoComplete="off"
                    value= {formState.password}
                    onChange={handleChange}/>
        
                <button type="submit"> Sign in </button>     
            </form>
            )}

        {error && (
          <div>{error.message}</div>
        )}

        </div>
    );
};

export default Login;