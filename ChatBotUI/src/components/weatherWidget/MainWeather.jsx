"use client";

import { useState } from "react";
import WeatherCall from "./WeatherCall";
import WeatherLayOut from "./WeatherLayout";

const MainWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <>
    
        <WeatherCall setWeatherInfo={setWeatherInfo} />
        {/* <WeatherLayOut weatherInfo={weatherInfo} /> */}
        
      
    </>
  );
};

export default MainWeather;
