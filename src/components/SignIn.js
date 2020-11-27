import React,{useState} from 'react';
import Button from "./Button";
import SignUpInner  from "./SignUpInner";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";

function SignIn() {
    const [value,setValue]= useState({
        email:"",
        password:""
    });


    return (
        <div>
        <Navbar></Navbar>
        <div className="container">      
        <div className="row">
            <div className="col-12 col-md-6 offset-md-3">
                <form>
                    <h3>SignIn</h3>
                    <br/>
                    <SignUpInner name="Email" type="email" labelname="Email"></SignUpInner>
                    <SignUpInner name="Password" type="text" labelname="Password"></SignUpInner>
                    <div className="col-sm-2 ml-auto">
                    <Link to="/mainWeather">
                        <Button  title="SignIn"></Button>
                    </Link>
                      
                     </div> 
                </form>
                
               
            </div>
                    
             </div>
        </div>
        </div>
           
    
    )
}

export default SignIn
