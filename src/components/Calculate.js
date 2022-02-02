import React, { useState, useEffect } from "react";
import Navbar from "./Navigate/Navbar";
import Sidebar from "./Navigate/Sidebar";
import style from "./css/Calculate.module.css";
import ImageFarm from "../image/logoApp.png";
import firebase from "../config";
import { Link as Smooth } from "react-scroll";
import Export from "./Section/Calculate/Export";
import {
  BoxAnalyzeBottom,
  BoxAnalyzeTop,
  BoxBottomAnalyzeLeft,
  BoxBottomAnalyzeRight,
  BoxContentRowOne,
  BoxContentRowThree,
  BoxContentRowTwo,
  BoxDataChart,
  BoxLeftContentOne,
  BoxLeftContentThree,
  BoxLeftContentTwo,
  BoxTextChart,
  BoxTopAnalyzeLeft,
  BoxTopAnalyzeRight,
  ContainerCalculate,
  HeaderCalculate,
  MainCalculate,
  PieBoxAnalyze,
  BoxBottomDataChart,
  RowHeaderTextOne,
  RowTitleTextOne,
  BoxRowDataText,
  RowDataTextOne,
  RowHeaderTextTwo,
  RowDataTextTwo,
  ContentOneHeader,
  OneHeaderText,
  OneTitleText,
} from "./elements/CalculateElement";
import Chart from "./Chart/Chart";
import Bar from "./Chart/Bar";
import Line from "./Chart/Line";

export default function Calculate() {
  const [isOpen, setIsOpen] = useState(false);
  const [chartData, setchartData] = useState({});
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  function SetDataChart() {
    const ChartDataSet = {
      labels: [
        "Plot 201",
        "Plot 202",
        "Plot 203",
        "Plot 211",
        "Plot 212",
        "Plot 202",
      ],
      datasets: [
        {
          label: "Population",
          data: [121, 230, 114, 135, 177, 201],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    };
    setchartData(ChartDataSet);
  }
  useEffect(() => {
    SetDataChart();
  }, []);
  console.log(chartData);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div style={{ margin: 0, padding: '5px' }}>
        <div className={style.header}>
          <text className={style.header_title}>Data Analysis</text>
          <p className={style.header_detail}>การวิเคราะห์ข้อมูลจากการบันทึก </p>
        </div>
        <div className={style.box_DataAnalyze}>
          <div className={style.box_RightData}>
            <div className={style.title_grahp}>
              <text className={style.text_titleGraph}>
                การเปรียบเทียบค่าในแต่ละแปลง
              </text>
              <div className={style.chart}>
                <Chart
                  chartData={chartData}
                  location="Massachusetts"
                  legendPosition="bottom"
                />
              </div>
            </div>
          </div>
          <div className={style.box_Data_one}>
            <div className={style.box_dataDate}>
              <div className={style.centerText}>
                <p style={{ fontSize: 20 }}>Sunday</p>
                <h3 style={{ fontSize: 40, marginTop: -10, fontWeight: "400" }}>
                  8
                </h3>
              </div>
            </div>
            <div className={style.box_farmGood}>
              <div className={style.content_farmDood}>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "20px",
                    color: "#fff",
                  }}
                >
                  แปลงที่มีความคืบหน้ามากที่สุด
                </p>
              </div>
              <div className={style.box_plotGood}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={ImageFarm}
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      marginLeft: "-20px",
                      marginTop: "-7px",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginLeft: 10,
                  }}
                >
                  Plot 201
                </p>
              </div>
            </div>
            <div className={style.box_detail}>
              <div className={style.detail_farm}>
                <div className={style.detail_text}>
                  <p style={{ marginTop: 15 }}>มวลรวมของข้าวโพด</p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "400",
                      marginTop: -10,
                      color: "#50CB93",
                    }}
                  >
                    211
                  </p>
                </div>
                <div className={style.detail_text}>
                  <p style={{ marginTop: 15 }}>Varieties</p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "400",
                      marginTop: -10,
                      color: "#D83A56",
                    }}
                  >
                    DPR-6
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.box_Data_two}>
            <div className={style.box_dataDate}>
              <div className={style.centerText}>
                <p style={{ fontSize: 20 }}>Monday</p>
                <h3 style={{ fontSize: 40, marginTop: -10, fontWeight: "400" }}>
                  9
                </h3>
              </div>
            </div>
            <div className={style.box_farmGood}>
              <div className={style.content_farmDood}>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#5E454B",
                  }}
                >
                  แปลงที่มีความคืบหน้ามากที่สุด
                </p>
              </div>
              <div className={style.box_plotGood}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={ImageFarm}
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      marginLeft: "-20px",
                      marginTop: "-7px",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginLeft: 10,
                  }}
                >
                  Plot 202
                </p>
              </div>
            </div>
            <div className={style.box_detail}>
              <div className={style.detail_farm}>
                <div className={style.detail_text}>
                  <p style={{ marginTop: 15 }}>มวลรวมของข้าวโพด</p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "400",
                      marginTop: -10,
                      color: "#50CB93",
                    }}
                  >
                    243
                  </p>
                </div>
                <div className={style.detail_text}>
                  <p style={{ marginTop: 15 }}>Varieties</p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "400",
                      marginTop: -10,
                      color: "#D83A56",
                    }}
                  >
                    DPR-3
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.box_Data_three}>
            <div className={style.box_dataDate}>
              <div className={style.centerText}>
                <p style={{ fontSize: 20 }}>Tuesday</p>
                <h3 style={{ fontSize: 40, marginTop: -10, fontWeight: "400" }}>
                  10
                </h3>
              </div>
            </div>
            <div className={style.box_farmGood}>
              <div className={style.content_farmDood}>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    color: "#444941",
                  }}
                >
                  แปลงที่มีความคืบหน้ามากที่สุด
                </p>
              </div>
              <div className={style.box_plotGood}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={ImageFarm}
                    style={{
                      width: 30,
                      height: 30,
                      position: "absolute",
                      marginLeft: "-20px",
                      marginTop: "-7px",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginLeft: 10,
                  }}
                >
                  test 1
                </p>
              </div>
            </div>
            <div className={style.box_detail}>
              <div className={style.detail_farm}>
                <div className={style.detail_text}>
                  <p style={{ marginTop: 15 }}>มวลรวมของข้าวโพด</p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "400",
                      marginTop: -10,
                      color: "#50CB93",
                    }}
                  >
                    0
                  </p>
                </div>
                <div className={style.detail_text}>
                  <p style={{ marginTop: 15 }}>Varieties</p>
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: "400",
                      marginTop: -10,
                      color: "#D83A56",
                    }}
                  >
                    test
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.box_Bar}>
            <div className={style.box_BarAnalyze_Left}>
              <text className={style.text_titleGraph}>
                การวิเคราะห์การเจริญเติบโตของแต่ละแปลง
              </text>
              <div className={style.chartBar}>
                <Bar chartData={chartData} />
              </div>
            </div>
            <div className={style.box_BarAnalyze_Right}>
              <text className={style.text_titleGraph}>
                ความคืบหน้าในการเจริญเติบโต - ต่อแปลง
              </text>
              <div className={style.chartBar}>
                <Line chartData={chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Export /> */}
    </>
  );
}
