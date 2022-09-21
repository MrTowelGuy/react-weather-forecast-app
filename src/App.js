import React from "react";
import "./styles.css";
import Weather from "./components/WeatherAppFull";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{Weather}</section>
    </div>
  );
}
