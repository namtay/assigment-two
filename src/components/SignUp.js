import React,{useState} from 'react'
import SignUpInner from "./SignUpInner";
import Button from "./Button";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

import "./SignUp.css";


function SignUp(props) {
    const [value,setValue]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
       })

       const handleChange =(e)=>{
        setValue(e.target.value)
        }

    return (
        <div>
         <Navbar></Navbar>

        <div className="container SignUpBackground">  
        <br></br>
        <br></br>
        <br></br>
            
        <div className="row">
            <div className="col-12 col-md-6 mx-auto ">
                <form>
                        <h3 style={{color:"white",textAlign:"center"}}>Create Account</h3>
                        <br/>
                        <SignUpInner onChange={handleChange} value={value.firstName} name="FirstName" type="text" labelname="First name"></SignUpInner>
                        <SignUpInner onChange={handleChange} value={value.LastName} name="LastName" type="text" labelname="Last name"></SignUpInner>
                        <SignUpInner onChange={handleChange} value={value.email} name="Email" type="email" labelname="Email"></SignUpInner>
                        <SignUpInner onChange={handleChange} value={value.password} name="Password" type="password" labelname="Password"></SignUpInner>
                        <SignUpInner onChange={handleChange} value={value.confirmPassword} name="Confirm Password" type="password" labelname="ConfirmPassword"></SignUpInner>
                        <div className="col-sm-2 ml-auto">
                            <Link to="/signIn">
                            <Button  title="SignUp" style={{backgroundColor: "#448AFF","border":10+"px"}}></Button> 
                            </Link>                    
                        </div>               
                  </form >  
                  <br></br> 
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>      
                  <br></br>
                  <br></br>
                  <br></br>
            </div>
        </div>     
             
        </div>
        
        </div>      
       
    )
}

export default SignUp
