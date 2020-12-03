import React,{useState,useEffect} from 'react';
import Navbar from "./Navbar";
import axios from "axios";

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
            <div className=" container bg-info">
                  <div className="row" style={{"marginBottom":100 +"px"}}>
                    <div className="col-sm-4 mx-auto text-light align-items-center">
                            <h1>Weather Forecast</h1>
                            </div> 
                    </div>
                             
                    
                <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <div className="card text-white bg-info">
                                <div className="card-body">
                                    <img style={{"width":100+"px"}} src={weather.iconUrl} alt="Clear"/>
                                    <h5>City: {weather.cityName}</h5>
                                    <h5>Region: {weather.region}</h5>
                                    <h5>Country: {weather.country}</h5>
                                    <h5> Description: {weather.description}</h5>
                                    <h5>Temperature: {weather.temperature}</h5>
                                    <h5>Date and Time: {weather.dateTime}</h5>
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