import React, { useState,useEffect } from 'react'
import "./style.css";
import moment from 'moment/moment';

const Weathercard = ({tempInfo}) => {

const[weatherState, setWeatherState] = useState('');
  const{ temp,
    humidity, 
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset
   } = tempInfo;

   useEffect(() => {
     if(weathermood)
        switch (weathermood) {
            case "Clouds":
                setWeatherState("wi-day-cloudy")
                break;
            case "Haze":
                setWeatherState("wi-fog")
                break;
            case "Sunny":
                setWeatherState("wi-day-sunny")
                break;
            case "Mist":
                setWeatherState("wi-night-alt-snow-wind")
                break;
            case "Clear":
                setWeatherState("wi-day-windy")
                break;
            case "Raining":
                setWeatherState("wi-day-thunderstorm")
                break;
            default:
                setWeatherState("wi-day-sunny")
                break;
        }
   }, [weathermood])
   
                                  
   let sec = sunset;
     let date = new Date(sec * 1000);      //it contvert to milisecond          
     let timeStr = `${date.getHours()}: ${date.getMinutes()} :${date.getSeconds()}`;
        
  return (
    <>
       <article className='widget'>
          <div className='weatherIcon'>
            <i className={`wi ${weatherState}`}></i>
          </div>

          <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            
            <div className='description'>
                <div className='weatherCondition'>{ weathermood}</div>
                <div className='place'>{name}, {country}</div>
            </div>
          </div>

          <div className='date'>{moment().format('Do MM YYYY, h:mm:ss a')}</div>

          {/* four column footer */}

          <div className='extra-temp'>
             <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                     <i className={"wi wi-sunset"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    {timeStr} <br></br>
                    sunset
                    </p>
                </div>

                <div className='two-sided-section'>
                    <p>
                     <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    {humidity} <br></br>
                    Humidity
                    </p>
                </div>
             </div>

                <div className='weather-extra-info'>
                  <div className='two-sided-section'>
                        <p>
                           <i className={"wi wi-rain"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                        {pressure} <br></br>
                        Pressure
                        </p>
                  </div>

                  <div className='two-sided-section'>
                        <p>
                           <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className='extra-info-leftside'>
                        {speed} <br></br>
                        Speed
                        </p>
                   </div>
                </div>
               
          </div>
       </article>
    </>
    )
}

export default Weathercard;