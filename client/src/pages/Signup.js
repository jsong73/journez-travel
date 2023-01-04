import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Signup = () => {
    const [formState, setFormState] = useState({
        email: "",
        username: "",
        password: "",
    });

    const [addUser, {error, data}] = useMutation(ADD_USER);

    return(
        <div>
            Sign up
        </div>
    )
}

export default Signup;