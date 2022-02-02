import React, { useState } from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import Khonkaen from "./City_Weather/Khonkean";
import Chaiyaphum from "./City_Weather/Chaiyaphum";
import { fetchWeather } from "./fetchWeather/fetchWeather";
import SearchImage from "../image/SeachWeather.png";
import LogoWeather from "../image/weather.png";
import Navbar from "./Navigate/Navbar";
import Sidebar from "./Navigate/Sidebar";
import ImageContent from "../image/cloudy.png";
import IconLocation from "../image/location.png";
import {
  BoxBottomContent,
  BoxCityComponent,
  BoxCitytemp,
  BoxContainerLeft,
  BoxContainerRight,
  BoxContainerSearch,
  BoxContentBottom,
  BoxContentTop,
  BoxContentWeather,
  BoxDataWeather,
  BoxGetWeather,
  BoxHeaderLabel,
  BoxImageSearch,
  BoxInfo,
  BoxInputSearch,
  BoxSearch,
  BoxTopContentOne,
  BoxTopContentTwo,
  BoxTopRowContent,
  BoxTopRowHeader,
  BoxWeatherLeft,
  BoxWeatherRight,
  BtnInputSearch,
  CityIcon,
  ContentTopRow,
  HeaderBoxRight,
  HeaderWeather,
  ImageIconLocation,
  ImageSearch,
  ImageWeather,
  InputSearch,
  LabelSearch,
  MainWeather,
  RowContent,
  TextCityName,
  TextHeader,
  TextHeaderRight,
  TextTitle,
  TopRowImage,
  TopRowText,
  WeatherContainer,
} from "./elements/WeatherFetchElement";
import { SizeBackground } from "./elements/CalculateElement";

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const search = async (e) => {
    if (e.key == "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <WeatherContainer>
        <MainWeather>
          <HeaderWeather>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <ImageWeather src={LogoWeather} />
            </div>
            <TextHeader>พยากรณ์อากาศ</TextHeader>
            <TextTitle>
              เลือกจังหวัดในการเช็คสภาพอากาศในพื้นที่ใกล้เคียง
            </TextTitle>
          </HeaderWeather>
          <BoxContentWeather>
            <BoxContentTop>
              <BoxTopContentOne>
                <BoxSearch>
                  <BoxHeaderLabel>
                    <LabelSearch>ค้นหาพื้นที่ของคุณ</LabelSearch>
                  </BoxHeaderLabel>
                  <BoxInputSearch>
                    <BoxImageSearch>
                      <ImageSearch src={SearchImage} />
                    </BoxImageSearch>
                    <BtnInputSearch>
                      <InputSearch
                        type="text"
                        placeholder="ค้นหาพื้นที่ของคุณ..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={search}
                      />
                    </BtnInputSearch>
                  </BoxInputSearch>
                </BoxSearch>
                <BoxGetWeather>
                  {weather.main && (
                    <BoxDataWeather>
                      <TextCityName>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                      </TextCityName>
                      <BoxCitytemp>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                      </BoxCitytemp>
                      <BoxInfo>
                        <CityIcon
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt={weather.weather[0].description}
                        />
                        <p>{weather.weather[0].description}</p>
                      </BoxInfo>
                    </BoxDataWeather>
                  )}
                </BoxGetWeather>
              </BoxTopContentOne>
              <BoxTopContentTwo>
                <ContentTopRow>
                  <BoxTopRowHeader>
                    <TopRowImage src={ImageContent} />
                    <TopRowText>อุณหภูมิเหมาะสมต่อการเจริญเติบโต</TopRowText>
                  </BoxTopRowHeader>
                  <BoxTopRowContent>
                    <RowContent>
                      อุณหภูมิเหมาะสมต่อการเจริญเติบโต 24- 28 องศาเซลเซียส
                      ถ้าอุณหภูมิสูงกว่า 35 องศา เซลเซียส
                      อาจมีปัญหาในการผสมเกสรทำให้การติดเมล็ดไม่ดีเท่าที่ควร
                      ปริมาณน้ำฝนกระจายสม่ำเสมอ มีแสงแดดจัด
                    </RowContent>
                  </BoxTopRowContent>
                </ContentTopRow>
              </BoxTopContentTwo>
            </BoxContentTop>
            <BoxContentBottom>
              <BoxBottomContent>
                <HeaderBoxRight>
                  <ImageIconLocation src={IconLocation} />
                  <TextHeaderRight>
                    พยากรณ์อากาศในพื้นที่ใกล้เคียง
                  </TextHeaderRight>
                </HeaderBoxRight>
                <BoxCityComponent>
                  <Khonkaen />
                  <Chaiyaphum />
                </BoxCityComponent>
              </BoxBottomContent>
            </BoxContentBottom>
          </BoxContentWeather>
        </MainWeather>
      </WeatherContainer>
    </>
    // <div className={style.main}>
    //   <Navbar />
    //   <div className={style.container}>
    //     <div className={style.header}>
    //       <h1 style={{ fontWeight: "bold", color: "#fff" }}>พยากรณ์อากาศ</h1>
    //     </div>
    //     <div className={style.content}>
    //       <div className={style.Left}>
    //         <div style={{ textAlign: "center", marginBottom: "1em" }}>
    //           <h3 style={{ fontWeight: "bold", color: "#5C7AEA" }}>
    //             สภาพอากาศพื้นที่ใกล้เคียง
    //           </h3>
    //         </div>
    //       </div>
    //       <div className={style.Right}>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "center",
    //             marginBottom: "1.5em",
    //           }}
    //         >
    //           <div className={style.boxSearch}>
    //             <label
    //               style={{
    //                 fontSize: 17,
    //                 marginLeft: "1em",
    //                 marginBottom: "10px",
    //               }}
    //             >
    //               ค้นหาพื้นที่ของคุณ
    //             </label>
    //             <div className={style.boxInput}>
    //               <div style={{ border: "none" }} className={style.boxImage}>
    //                 <img src={SearchImage} style={{ width: 35, height: 35 }} />
    //               </div>
    //               <div className={style.bntInput}>
    //                 <input
    //                   type="text"
    //                   className={style.search}
    //                   placeholder="Search..."
    //                   value={query}
    //                   onChange={(e) => setQuery(e.target.value)}
    //                   onKeyPress={search}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className={style.boxShowWeather}>
    //           {weather.main && (
    //             <div className={style.boxWeather}>
    //               <h2 className={style.cityname}>
    //                 <span>{weather.name}</span>
    //                 <sup>{weather.sys.country}</sup>
    //               </h2>
    //               <div className={style.cityTemp}>
    //                 {Math.round(weather.main.temp)}
    //                 <sup>&deg;C</sup>
    //               </div>
    //               <div className={style.info}>
    //                 <img
    //                   className={style.cityIcon}
    //                   src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    //                   alt={weather.weather[0].description}
    //                 />
    //                 <p>{weather.weather[0].description}</p>
    //               </div>
    //             </div>

    //           )}
    //         </div>
    //         <div className={style.showstatus}>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
