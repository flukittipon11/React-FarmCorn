import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import { Main } from "./WeatherCityElement";

export default function Khonkaen() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "5c1b9c0a75910fd522b8833cb5d6bde1",
    lat: "16.439625",
    lon: "102.828728",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  const customStyles = {
    fontFamily: "IBM Plex Sans Thai",
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
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
          locationLabel="Khon Kaen"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast={false}
        />
      </Main>
    </>
  );
}
