import { useEffect, useState } from 'react';
import PropTypes from "prop-types"; 
import "./Weatherapp.css";
import Clear from "./Images/clear.jpeg";
import Cloud from "./Images/cloud.png";
import Drizzle from "./Images/drizzle.png"; 
import Humidity from "./Images/humidity.png";
import Rain from "./Images/rain.png";  
import  Search from './Images/search.jpeg';
import Snow from "./Images/snow.png";
import  Wind from "./Images/wind.png"

const Weatherdetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
    return(
        <>
            <div className="image">
                <img src={icon} style={{width:"100px",height:"100px" }} alt="img" />
                
                
            </div>
                
                <div className="temp">{temp}^c</div>
                <div className="location">{city}</div>
                <div className="country">{country}</div>
            <div className="cort">
                <div>
                    <span className='lat'>latitude</span>
                    <span>{lat}</span>
                </div>
                <div>
                    <span className='log'>logitude</span>
                    <span>{log}</span>
                </div>
            </div>
            <div className="data-container">
                <div className="element">
                    <img src={Humidity} style={{width:"30px",height:"30px"}} className='Icon' alt="img" />
                    <div className="data">
                        <div className="humidity-percent">{humidity}%</div>
                    </div>
                    <div className="text">Humidity</div>
                </div>
                <div className="element">
                    <img src={Wind} style={{width:"30px",height:"30px"}} className='Icon' alt="img" />
                    <div className="data">
                        <div className="wind-percent">{wind}km/h</div>
                    </div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </>
    )
}


export const Weatherapp = () => {
    let api_key="9eeaf3d3e490c6e66a085d7fcefe9e36"
    const[text,setText]=useState("Chennai");

    const [icon,setIcon]=useState(Snow);
    const[temp,setTemp]=useState(0);
    const[city,setCity]=useState("Chennai");
    const[country,setCountry]=useState("IN");
    const[lat,setLat]=useState(0);
    const[log,setLog]=useState(0);
    const[humidity,setHumidity]=useState(0);
    const[wind,setWind]=useState(0);
    const[citynotfound,setCityNotFound]=useState(false);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    const weatherIcon=({
        "01d":Clear,
        "01n":Clear,
        "02d":Cloud,
        "02n":Cloud,
        "03d":Drizzle,
        "03n":Drizzle,
        "04d":Drizzle,
        "04n":Drizzle,
        "09d":Rain,
        "09n":Rain,
        "10d":Rain,
        "10n":Rain,
        "13d":Snow,
        "13n":Snow,
    })
    const search = async ()=>{
        setLoading(true);
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
        try{
            let res=await fetch(url);
            let data=await res.json();
            /* console.log(data) */
            if (data.cod === "404"){
                console.error("city not found");
                setCityNotFound(true);
                setLoading(false);
                return;
            }
            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setLog(data.coord.lon);
            setLat(data.coord.lat);
            setTemp(Math.floor(data.main.temp));
            setCountry(data.sys.country);
            setCity(data.name);
            const weatherIconCode=data.weather[0].icon;
            setIcon(weatherIcon[weatherIconCode] || Clear);
            setCityNotFound(false);

        }catch(error){
            console.error("an error occured",error);
            setError("An error occured while featching data");
        }finally{
            setLoading(false);
            
        }
    };

    const handlecity=(e)=>{
        setText(e.target.value)
    }
    
    const handlekeydown=(e)=>{
        if(e.key === "Enter"){
            search()
        }
    }

    useEffect(()=>{
        search()
    },[])
  return (
    <div>
        <div className='container'>
            <div className="input-container">
                <input type="text" className='cityinput' 
                placeholder='search city' 
                onChange={handlecity} 
                value={text}
                onKeyDown={handlekeydown}/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={Search} style={{width:"20px",height:"20px"}} alt="search" />
                </div>
            </div>
            
            {loading && <div className="loading-message">Loading...</div>}
            {error && <div className="error-message">{error}</div>}
            {citynotfound && <div className="city-not-found">city not found</div>}

            {!loading && !citynotfound && <Weatherdetails icon={icon} temp={temp} city={city} country={country} log={log} lat={lat} humidity={humidity} wind={wind} />}

            <p className='copyright'>
                Designed BY <span>Sankar</span>
            </p>
        </div>
    </div>
  )
}

Weatherdetails.propTypes={
    icon:PropTypes.string,
    temp:PropTypes.number,
    city:PropTypes.string,
    country:PropTypes.string,
    humidity:PropTypes.number,
    wind:PropTypes.number,
    lat:PropTypes.number,
    log:PropTypes.number,
}