import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import { Main } from "./WeatherCityElement";

export default function Chaiyaphum() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "5c1b9c0a75910fd522b8833cb5d6bde1",
    lat: "15.806817",
    lon: "102.031503",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  const customStyles = {
    fontFamily: "IBM Plex Sans Thai",
    gradientStart: "#614385",
    gradientMid: "#04A7F9",
    gradientEnd: "#516395",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };
  return (
    <>
      <Main>
        <ReactWeather
          theme={customStyles}
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Chaiyaphum"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast={false}
        />
      </Main>
    </>
  );
}
