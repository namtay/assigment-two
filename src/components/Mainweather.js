import React,{useState} from 'react';
import NavbarSearch from "./NavbarSearch";
import axios from "axios";
import "./MainWeather.css"; 

function Mainweather() {
    const [search,setSearch]= useState("");  
    const[searchResults,setSearchResults]=useState({
        cityName:"",
        region:"",
        country:"",
        description:"",
        iconUrl:"",
        temperature:"",
        dateTime:"",
        id:""
    })
   const [updated,setUpdated]=useState(false);
   const [history,setHistory]=useState([]);
   const [historyUpdated,setHistoryUpdated]=useState(false);
   const [show,setShow]=useState(false);

   



    const handleChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search);
    }       
    const handleClick=(e)=>{
        e.preventDefault();
        setHistoryUpdated(false);
        if(search){
            axios.get(`http://api.weatherapi.com/v1/current.json?key=063a2ee47c3f4638a78215543202511&q=${search}`)
            .then((res)=>{
                console.log(res.data);
                 setSearchResults({
                     cityName: res.data.location.name,
                     region:res.data.location.region,
                     country:res.data.location.country,
                     description:res.data.current.condition.text,
                     iconUrl:res.data.current.condition.icon,
                     temperature:res.data.current.temp_c,
                     dateTime: res.data.location.localtime,
                     id:res.data.current.last_updated_epoch
                     
                });        
                 setUpdated(true);
                 setShow(true);

               
            } )           
            .catch((err)=>console.error(err)) }       
       }              
    const displayHistory = () => {
            if (updated){
                  const array = history.slice(-4);
                   localStorage.setItem("storedWeather", JSON.stringify(searchResults));
                    const newHistory =JSON.parse(localStorage.getItem("storedWeather"));
                    console.log(newHistory);
                    setUpdated(false);
                    array.push(newHistory);
                    setHistory(array);
                    setHistoryUpdated(true);      
                }             
     }    
  

    const historyList = history.map(singleHistory => (         
         <div class="card"   key={singleHistory.id} style={{"width":400+"px"  ,"margin-left":200+"px"}}>
         <div class="card-body">
         <h5 class="card-title">{singleHistory.cityName}</h5>
         <p class="card-text">{singleHistory.temperature}&deg;C     {singleHistory.description}   {singleHistory.dateTime}</p>       
        </div> 
        </div>  
        )) 

    return (
        <div>
             <NavbarSearch></NavbarSearch>
             <div className="">
                <div className="container backgroundImage">
                    <div className="row" style={{"paddingTop":100 +"px"}}>
                        <div className="col-sm-5 mx-auto" >
                        <form  className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                        <button className="btn btn-outline-white text-black " type="submit" onClick={handleClick}>
                            Search                           
                        </button>                      
                        </form>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div  className="row row-content"   style={{ display: show? "block" : "none" }}>                                              
                            <div className="col-md-8 mx-auto" style={{"opacity": 0.8}}>                                                  
                                <div className="card text-black" id="displaySearch">
                                    <div className="card-body">
                                        <div className="row row-content">
                                            <img  className="col-sm-4 mx-auto" style={{"width":50+"px"}} src={searchResults.iconUrl} alt=""/>
                                        </div>
                                        <div className="row">
                                                <div className="col-sm-4 align-self-center" >  
                                                    <p className=" city">{searchResults.cityName}</p>
                                                </div>
                                                <div className="col-sm-4 align-self-center">                 
                                                      <p className="description">{searchResults.description}</p>                     
                                                </div>
                                                <div className="col-sm-4 align-self-center">
                                                    <p className="temperature">{searchResults.temperature}&deg;C</p>
                                                </div>
                                        </div>
                                        <div className="row ">                                       
                                                <p className="col-sm-4 ml-auto date">{searchResults.dateTime}</p>
                                        </div>                                       
                                    </div>                                                                    
                               </div>
                               <br/>
                               <br/>
                               <div className="row row-content">    
                                                                                                                                 
                                    {displayHistory()}  
                                    <div>
                                        {historyUpdated ?                                            
                                             historyList 
                                               :
                                             null}   
                                    </div>                                 
                                                                     
                                </div>                            
                            </div>  
                            
                            </div>
                               
                     </div>      
                                                          
                </div>
            </div>          
    
          
       
          
        
    )

    
}

export default Mainweather





 

// <div className="col-md-3">
// cfcvfvtgufutgftgfgfgasjcsuguydgsiai
// </div>





// <p key={singleHistory.id}>{singleHistory.cityName}     {singleHistory.temperature}   {singleHistory.dateTime}</p>


// my-2 my-sm-0