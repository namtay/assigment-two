import React,{useState} from 'react';
import Button from "./Button";
import SignUpInner  from "./SignUpInner";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import "./SignUp.css";

function SignIn() {
    const [value,setValue]= useState({
        email:"",
        password:""
    });
    const [login,setLogin]=useState(false)
    const handleClick=(e)=>{
        if (value.email=== "ewoenamtay@gmail.com" && value.password==="12345678"){
            setLogin(true);
            
        }
    }
    const handleEmail=(e)=>{
        setValue({email:e.target.value});
    }
    const handlePassword=(e)=>{
        setValue({password:e.target.value});
    }
    return (
        <div>
        <Navbar></Navbar>
        <div className="container ">      
        <div className="row">
            <div className="col-12 col-md-6 offset-md-3 SignUpBackground" style={{borderRadius:10+"px",marginTop:20+"px"}}>
                <form>
                    <h3 style={{color:"white",textAlign:"center"}}>SignIn</h3>
                    <br/>
                    <SignUpInner onChange={handleEmail} name="Email" type="email" labelname="Email"></SignUpInner>
                    <SignUpInner onChange={handlePassword} name="Password" type="password" labelname="Password"></SignUpInner>
                    <div className="col-sm-2 ml-auto">
                    { login? 
                    <Button   title="SignIn"></Button>
                       :
                    <Link to="/mainWeather">
                    <Button onClick={handleClick}  title="SignIn"></Button>
                    </Link>
                 }
                   
                      
                     </div> 
                </form>
                
               
            </div>
                    
             </div>
        </div>
        </div>
           
    
    )
}

export default SignIn
