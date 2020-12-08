import React,{useState,useEffect} from 'react';
import Navbar from "./Navbar";
import axios from "axios";
import "./Home.css"

function Home() {
    const initialValue=[{}];
    const [cities,setCities]=useState(initialValue);
    const [weather,setWeather]=useState({
        cityName:"",
        region:"",
        country:"",
        description:"",
        iconUrl:"",
        temperature:"",
        dateTime:""

    });

    useEffect(()=>{
        
        axios.get("https://restcountries.eu/rest/v2/capital/accra")
        .then((res)=>{
            console.log(res.data);
             setCities(res.data);
        } )
       
        .catch((err)=>console.error(err))
    },[])

    useEffect(()=>{
        
        axios.get("http://api.weatherapi.com/v1/current.json?key=063a2ee47c3f4638a78215543202511&q=Accra")
        .then((res)=>{
            console.log(res.data.location.name);          

             setWeather({
                 cityName: res.data.location.name,
                 region:res.data.location.region,
                 country:res.data.location.country,
                 description:res.data.current.condition.text,
                 iconUrl:res.data.current.condition.icon,
                 temperature:res.data.current.temp_c,
                 dateTime: res.data.location.localtime,
                 
             });
        } )
       
        .catch((err)=>console.error(err))
    },[])
    

   

    return (
        <div >
            <Navbar></Navbar>
            <div className="">
            <div className="container backgroundImage2">
            <div className="row" style={{"marginBottom":200 +"px"}}>
              <div className="col-sm-6 mx-auto text-light align-items-center" style={{"marginTop":50+"px"}}>
                      <h1>Current weather condition</h1>
                      </div> 
              </div>
                       
              
          <div className="row">
                  <div className="col-sm-5 mx-auto">
                      <div className="card text-black" style={{"marginBottom":40+"px"}}>
                          <div className="card-body align-items-center">
                             <div className="row">
                             <div className="col-md-6  mx-auto">
                             <img  style={{"width":100+"px"}} src={weather.iconUrl} alt="Clear"/>
                             <span style={{"fontSize":20+"px","fontWeight":500+"px"}}>{weather.temperature} &deg;C</span>
                             <h5>{weather.description}</h5>                                                           
                             <h5>{weather.cityName},{weather.country}</h5>                    
                             
                             <h5>{weather.dateTime}</h5>
                          </div>                          
                          </div>                       
                                                            
                          </div>
                      </div>
                  </div>
          </div>               
         
      </div>        

     
      
            </div>
           
        </div>
    )
}

export default Home





// {cities.map((city,i) => (
                    //     <div>
                    //     <li key={i}> The name of your country is {city.name}</li>
                        
                    //     </div>
                        
                    // ))}