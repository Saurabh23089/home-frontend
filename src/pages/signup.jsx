import supabase from "../supabase/supabaseClient.jsx";
import { useEffect, useState } from "react";
import { Navigate, useNavigate,Link } from "react-router-dom";
import Login from "./login.jsx";

const Signup = () => {

    const navigate  = useNavigate();

    const [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    function handlechange(e) {
        e.preventDefault();

        setformdata((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    async function handlesubmit(e) {
        e.preventDefault();
        try {
            const { email, password, firstname, lastname } = formdata;
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        firstname: firstname,
                        lastname: lastname
                    }
                }
            })

            // console.log(data);
            alert("Check your Email for Verification Link");
            navigate('/');  

        } catch (error) {
           alert(error);
        }


    }

    // console.log(formdata);



    return (
        <div className="flex flex-col gap-4 mx-auto my-24 w-1/5">
            <p>Tailwind Home</p>
            <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
                <input
                   className="border-2 px-4 py-1"
                    type="text"
                    placeholder="Enter your First Name"
                    onChange={handlechange}
                    name="firstname"
                    required
                />

                <input
                className="border-2 px-4 py-1"
                    type="text"
                    placeholder="Enter your Last Name"
                    name="lastname"
                    onChange={handlechange}
                    required
                />

                <input
                className="border-2 px-4 py-1"
                    type="email"
                    placeholder="Enter your Email address"
                    name="email"
                    onChange={handlechange}
                    required
                />

                <input
                className="border-2 px-4 py-1"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handlechange}
                    required
                />
                <button type="submit" onClick={handlesubmit} className="px-4 bg-[#458932] py-2 rounded-xl">Sign up</button>
            </form>
            <p className="inline-flex gap-1">Already have an Account ? <Link to="/login" className="hover:underline">Login</Link></p>
        </div>
    );
};

export default Signup;
