import React, { useState, useEffect } from "react";
import {
  BoxCard,
  BoxDataShow,
  CornTainerShow,
  HeaderShow,
  MainShowScreen,
  ShowDataAnalyze,
  ShowDataPlot,
  HeaderTextShow,
  CardData,
  ImageCard,
  TextCard,
  TextPlace,
  TextVarietie,
  TextPlot,
  BoxImageAnalyze,
  ImageAnalyze,
  BoxTextAnalyze,
  TextAnalyzeHeader,
  TextAnalyzeTitle,
  Button,
  ArrowForward,
  ArrowRight,
} from "../elements/ShowDataElements";
import { BtnBox } from "../elements/WeatherElements";
import ImageCorn from "../../image/logoApp.png";
import PicAnalyze from "../../image/PicAnalyze.png";
import firebase from "../../config";
import Navbar from "../Navigate/Navbar";
import Sidebar from "../Navigate/Sidebar";

export default function ShowDataScreen() {
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const [Plots, setPlots] = useState([]);
  const dbRefPlot = firebase.firestore().collection("Corn-growth");
  const [isOpen, setIsOpen] = useState(false);

  function GetPlot() {
    setLoading(true);
    dbRefPlot.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setPlots(items);
      setLoading(false);
    });
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    GetPlot();
    // eslint-disable-next-line
  }, []);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CornTainerShow>
        <MainShowScreen>
          <HeaderShow>
            <h2>แสดงข้อมูลการบันทึก</h2>
            <p>
              แสดงข้อมูลและการวิเคราะห์ผลผลิตจากการบันทึกข้อมูลผ่านแอปพลิเคชั่น
            </p>
          </HeaderShow>
          <BoxDataShow>
            <ShowDataPlot>
              <HeaderTextShow>
                <h3>ข้อมูลกันทึกการเจริญเติบโตของข้าวโพด</h3>
                <p>เลือกแปลงการปลูก</p>
              </HeaderTextShow>

              <BoxCard>
                {loading ? <p style={{ color: "#fff" }}>Loading...</p> : null}
                {Plots.map((item) => (
                  <CardData
                    key={item.id}
                    to={{
                      pathname: `/dashboard#showScreen/${item.Farm_name}`,
                      state: {
                        userKey: item.key,
                      },
                    }}
                  >
                    <ImageCard>
                      <img
                        src={ImageCorn}
                        alt="imageCorn"
                        style={{ width: 40, height: 40 }}
                      />
                    </ImageCard>
                    <TextCard>
                      <TextPlot>แปลง : {item.Farm_name}</TextPlot>
                      <TextPlace>สถานที่ : {item.Farm_place}</TextPlace>
                      <TextVarietie>พันธ์ : {item.Corn_Varieties}</TextVarietie>
                    </TextCard>
                  </CardData>
                ))}
                {/* <CardData>
                  <ImageCard>
                    <img
                      src={ImageCorn}
                      alt="imageCorn"
                      style={{ width: 40, height: 40 }}
                    />
                  </ImageCard>
                  <TextCard>
                    <TextPlot>แปลง : Plot 201</TextPlot>
                    <TextPlace>สถานที่ : KKU</TextPlace>
                    <TextVarietie>พันธ์ : DBP-2</TextVarietie>
                  </TextCard>
                </CardData> */}
              </BoxCard>
            </ShowDataPlot>
            <ShowDataAnalyze>
              <BoxImageAnalyze>
                <ImageAnalyze src={PicAnalyze} />
              </BoxImageAnalyze>
              <BoxTextAnalyze>
                <TextAnalyzeHeader>ผลการวิเคราะห์ข้อมูล</TextAnalyzeHeader>
                <TextAnalyzeTitle>
                  ผลการวิเคราะห์คำนวนผลผลิตจากการบันทึกข้อมูลการเจริญเติบโตของข้าวโพด
                  ออกมาในรูปแบบของ Data Visualization
                </TextAnalyzeTitle>
              </BoxTextAnalyze>
              <BtnBox>
                <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                  แสดงผลการวิเคราะห์ {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </BtnBox>
            </ShowDataAnalyze>
          </BoxDataShow>
        </MainShowScreen>
      </CornTainerShow>
    </>
  );
}
