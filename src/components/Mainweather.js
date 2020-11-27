import React,{useState} from 'react';
import NavbarSearch from "./NavbarSearch";
import axios from "axios";
function Mainweather() {
    const [search,setSearch]= useState("");  
    const[searchResults,setSearchResults]=useState({
        cityName:"",
        region:"",
        country:"",
        description:"",
        // iconUrl:"",
        temperature:"",
        dateTime:""
    })
   const [updated,setUpdated]=useState(false);
   const [history,setHistory]=useState([]);



    const handleChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search);
    }       
    const handleClick=(e)=>{
        e.preventDefault();
        if(search){
            axios.get(`http://api.weatherapi.com/v1/current.json?key=063a2ee47c3f4638a78215543202511&q=${search}`)
            .then((res)=>{
                 setSearchResults({
                     cityName: res.data.location.name,
                     region:res.data.location.region,
                     country:res.data.location.country,
                     description:res.data.current.condition.text,
                     iconUrl:res.data.current.condition.icon,
                     temperature:res.data.current.temp_c,
                     dateTime: res.data.location.localtime,
                     
                 }              
                 );           
                 setUpdated(true);
               
            } )
           
            .catch((err)=>console.error(err)) }
       
       }
              
    const displayHistory = () => {
            if (updated === true){
                  const array = history.slice();
                    
                   localStorage.setItem("storedWeather", JSON.stringify(searchResults));
                    const newHistory =localStorage.getItem(JSON.parse('"storedWeather"'));
                    console.log(newHistory);
                    setUpdated(false);
                    array.push(newHistory);
                    setHistory(array);           
                                       
                    
                }        
         
         
     }         

    

    return (
        <div>
             <NavbarSearch></NavbarSearch>
             <div>
                <div className="container">
                    <div className="row" style={{"paddingTop":100 +"px"}}>
                        <div className="col-sm-5 mx-auto" >
                        <form  className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleClick}>
                        <a href="#displaySearch">Search</a>    
                        </button>
                        
                        </form>
                        </div>
                    </div>
                    <div  className="row row-content" >
                            <br></br>
                            <br></br>
                            <div className="col-sm-8 mx-auto">
                            <div className="card text-black" id="displaySearch">
                            <div className="card-body">
                               
                                <div className="row">
                                        <div className="col-sm-4 align-self-center">
                                            <p>{searchResults.cityName}</p>
                                        </div>
                                        <div className="col-sm-4 align-self-center">                       
                                        
                                        <p>{searchResults.description}</p>                          
                                        
                                        </div>
                                        <div className="col-sm-4 align-self-center">
                                            <p>{searchResults.temperature}</p>
                                        </div>
                                </div>
                                <div className="row ">
                                    <p className="col-sm-4 ml-auto">{searchResults.dateTime}</p>
                                </div>                
                                                                    
                                
                            </div>
                    </div>

                     {displayHistory() 
                                       
                    }
                     <div>{history}</div>
                </div>
                </div>
             </div>
             
        
       </div>   
       </div>  
 
            
        
    )

    
}

export default Mainweather





 // <div className="row row-content">
// <img  className="col-sm-4 mx-auto" style={{"width":100+"px"}} src={searchResults.iconUrl} alt=""/>
// </div>