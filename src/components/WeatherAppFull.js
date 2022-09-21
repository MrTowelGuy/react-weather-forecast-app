import WeatherData from "./weatherData";
import WeatherForecast from "./WeatherForecast";
import React from "react";

const Weather = WeatherData.map((element, idx) => {
  return (
    <WeatherForecast
      img={element.img}
      conditions={element.conditions}
      time={element.time}
      key={idx}
    />
  );
});

export default Weather;
