import supabase from "../supabase/supabaseClient.jsx";
import { useEffect, useState } from "react";
import { Navigate, useNavigate,Link } from "react-router-dom";
import Signup from "./signup.jsx";


const Login = () => {

    const navigate  = useNavigate();

    const [formdata, setformdata] = useState({
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
           
            const {data,error} = await supabase.auth.signInWithPassword({
                email:formdata.email,
                password:formdata.password
            })

            if(error) throw error;
            // console.log(data);
            navigate('/');


        } catch (error) {
           alert(error);
        }


    }

    // console.log(formdata);



    return (
        <div className="flex flex-col gap-4  mt-24 mx-auto w-1/5">
            <p className="text-lg">Tailwind Home</p>
            <form className="flex flex-col gap-4" onSubmit={handlesubmit}>
                <input
                    className="border-2 outline-none px-4 py-1"
                    type="email"
                    placeholder="Enter your Email address"
                    name="email"
                    onChange={handlechange}
                    required
                />

                <input
                    className="border-2 outline-none px-4 py-1"
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handlechange}
                    required
                />
                <button type="submit" onClick={handlesubmit} className="p-2 bg-[#458932] rounded-xl">Login</button>
            </form>
            <p className="inline-flex gap-1">Don't have an account?<Link to ="/signup" className="hover:underline">Signup</Link></p>
        </div>
    );
};

export default Login;
