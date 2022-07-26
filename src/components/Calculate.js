import React, { useState, useEffect } from "react";
import Navbar from "./Navigate/Navbar";
import Sidebar from "./Navigate/Sidebar";
import style from "./css/Calculate.module.css";
import ImageFarm from "../image/logoApp.png";
import firebase from "../config";
import { Link as Smooth } from "react-scroll";
import Export from "./Section/Calculate/Export";
import PlotHeaderImage from "../image/PlotCorn.png";
import SeedHeaderImage from "../image/seeds.png";
import GrowthHeaderImage from "../image/growth.png";
import PieHeaderImage from "../image/pie-chart.png";
import DoughnutHeaderImage from "../image/doughnut.png";
import ProcessHeaderImage from "../image/process.png";
import {
  BackgroundHeader,
  BoxAmountPlot,
  BoxAnalyzeMidle,
  BoxBar,
  BoxBarsChart,
  BoxbtmLeft,
  BoxbtmRight,
  BoxContent,
  BoxDoungnet,
  BoxFilterData,
  BoxPlotTop,
  BoxVarietiesTop,
  CircularProgress,
  ContainerAnalyze,
  ContentBottom,
  ContentMidle,
  ContentMidleLeft,
  ContentMidleRight,
  ContentTop,
  HeaderAnalyze,
  HeaderBoxMidle,
  ImagePlot,
  PlotHeaderContent,
  SubmitVarieties,
  TotalCorn,
  TotalVarietie,
} from "./elements/CalculateElement";
import Chart from "./Chart/Chart";
import Bar from "./Chart/Bars";
import Line from "./Chart/Line";
import Doughnuts from "./Chart/Doughnuts";
import Bars from "./Chart/Bars";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import BarsChart from "./Chart/BarsChart";

export default function Calculate() {
  const [isOpen, setIsOpen] = useState(false);
  const [chartData, setchartData] = useState({});
  const [option, setoption] = useState([]);
  const [plot, setplot] = useState([]);
  const [keySheathCorn, setkeySheathCorn] = useState([]);
  const [totalRowSeed, settotalRowSeed] = useState([]);
  const [array, setarray] = useState([]);
  const [datasets, setdatasets] = useState({});
  const [namePlots, setnamePlots] = useState([]);
  const [TotalCornMeat, setTotalCornMeat] = useState(0);
  const [TotalRowSeed, setTotalRowSeed] = useState([]);
  const [stateData, setstateData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [RowSeedArr, setRowSeedArr] = useState([]);
  const [percentage, setpercentage] = useState(0);
  const [total_Seed, settotal_Seed] = useState(0);
  const [dataStatus, setdata] = useState(0);

  let name = [];
  plot.map((res) => {
    const names = res.label;
    name.push(names);
  });
  let Setstatus = [];
  plot.map((res) => {
    const status = res.status;
    Setstatus.push(status);
  });
  let status = Setstatus.reduce((a, b) => a + b, 0);
  let databar = [];
  stateData.map((res) => {
    const doc = res;
    databar.push(doc);
  });

  let arr = [];
  plot.map((res) => {
    const status = res.status;
    arr.push(status);
  });
  let percentages = arr.reduce((a, b) => a + b, 0);
  let sumplotpercen = (percentage * 100) / (plot.length * 10);

  const firestoreRef = firebase.firestore().collection("Corn-growth");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  async function handleChange(value) {
    console.log(value);
    setplot(value);
    setarray([]);
    setnamePlots([]);
    settotalRowSeed([]);
    setdatasets([]);
    setstateData([]);
    setpercentage(0);
    let objectData = {};
    await Promise.all(
      value.map(async (plot) => {
        namePlots.push(plot.key);
        objectData[plot.key] = [];
        await getDataCollection(plot?.key, plot.value);
      })
    );
    console.log(plot);
    let statusArr = [];
    for (let j = 0; j < value.length; j++) {
      statusArr.push(value[j].status);
    }
    let sumStatus = statusArr.reduce((a, b) => a + b, 0);
    console.log(sumStatus);
    let StatusData = (sumStatus * 100) / (value.length * 10);
    console.log(StatusData);
    setpercentage(Math.floor(StatusData));
    let CornMeatArr = [];
    let CornSeedArr = [];
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      CornMeatArr.push(array[i].TotalWeigt_CornMeat);
      CornSeedArr.push(array[i].Total_Seed);
    }
    let totalmeat = CornMeatArr.reduce((a, b) => a + b, 0);
    let totalSeed = CornSeedArr.reduce((a, b) => a + b, 0);
    settotal_Seed(totalSeed);
    setTotalCornMeat(totalmeat); // console.log(plot);
  }

  async function getDataCollection(key, plot) {
    setisLoading(true);
    let currentData = [];
    if (!key) return;
    firestoreRef
      .doc(key)
      .collection("Sheath-Corn")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push({
            ...doc.data(),
            key: doc.id,
            plot: plot,
          });
          // console.log(key);
          if (!datasets[key]) datasets[key] = [];
          const datasetArr = datasets[key];
          datasets[key] = datasetArr.concat([doc.data().Total_RowSeed]);
          // dataset[key] = datasets[key].concat([doc.data().Total_RowSeed]);
        });
        let sumdataSet = datasets[key].reduce((a, b) => a + b, 0);
        totalRowSeed.push(sumdataSet);
        // totalRowSeed.push(datasets[key].reduce((a, b) => a + b, 0));
        // console.log(datasets);
        console.log("Key ===" + key);
        let totaldata = [];
        let CornSeedArr = [];
        for (let i = 0; i < array.length; i++) {
          totaldata.push(array[i].TotalWeigt_CornMeat);
          CornSeedArr.push(array[i].Total_Seed);
        }

        // setpercentage(statusdata);
        let totalMeat = totaldata.reduce((a, b) => a + b, 0);
        let totalSeed = CornSeedArr.reduce((a, b) => a + b, 0);
        currentData = totalRowSeed;
        // console.log(totalMeat);
        settotal_Seed(totalSeed);
        setTotalCornMeat(totalMeat);
        setisLoading(false);
      });
    setstateData(totalRowSeed);
  }

  function listTokenDoc() {
    const Tokendoc = [];
    plot.forEach((res) => {
      const keys = res.key;
      Tokendoc.push({
        key: keys,
      });
    });
    setkeySheathCorn(Tokendoc);
  }

  useEffect(() => {
    setisLoading(false);
    getPlotCollection();
    listTokenDoc();
    // setNameplot();
    // main();
  }, [isLoading]);
  // async function main() {
  //   await getPlotCollection();
  //   await listTokenDoc();
  //   await fetchData();
  // }
  console.log(option);

  function getPlotCollection() {
    const getAllDataPlots = [];
    firestoreRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const dataOption = doc.data();
        getAllDataPlots.push({
          key: doc.id,
          label: dataOption.Farm_name,
          value: dataOption.Farm_name,
          status: dataOption.statusData,
        });
      });
      setoption(getAllDataPlots);
      let dataArr = [];
      for (let i = 0; i < getAllDataPlots.length; i++) {
        dataArr.push(getAllDataPlots[i].status);
      }
      let sumArr = dataArr.reduce((a, b) => a + b, 0);
      let SumStatus = (sumArr * 100) / (getAllDataPlots.length * 10);
      console.log(SumStatus);
      setdata(SumStatus);
    });
  }

  const dataBars = {
    labels: name,
    datasets: [
      {
        label: "# of Votes",
        data: stateData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataDoughnut = {
    labels: name,
    datasets: [
      {
        label: "# of Votes",
        data: stateData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataBarsChart = {
    labels: name,
    datasets: [
      {
        label: "",
        data: stateData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  console.log("Arr = " + plot);
  if (plot == []) {
    setpercentage(0);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContainerAnalyze>
        <BackgroundHeader />
        <HeaderAnalyze>
          <h2>Data Analyze</h2>
          <p>การวิเคราห์ข้อมูลจากการบันทึก {totalRowSeed}</p>
        </HeaderAnalyze>
        <BoxContent>
          <ContentTop>
            <BoxFilterData>
              <h2>เลือกข้อมูลในการแสดงผล</h2>
              <p>เลือกข้อมูลในการแสดงผล</p>
              <Select
                options={option}
                components={makeAnimated}
                // value={plot}
                onChange={(value) => handleChange(value)}
                isMulti
              />
            </BoxFilterData>
            <BoxPlotTop>
              <PlotHeaderContent>
                <ImagePlot src={PlotHeaderImage} />
                <h2>ค่าผลรวมเมล็ดข้าวโพด</h2>
              </PlotHeaderContent>
              <TotalCorn>
                <h2>{total_Seed}</h2>
              </TotalCorn>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1rem",
                }}
              >
                <p style={{ color: "gray", fontSize: 22 }}>เมล็ด</p>
              </div>
            </BoxPlotTop>
            <BoxVarietiesTop>
              <PlotHeaderContent>
                <ImagePlot src={SeedHeaderImage} />
                <h2>ค่าผลรวมมวลข้าวโพด</h2>
              </PlotHeaderContent>
              <TotalCorn>
                <h2>{TotalCornMeat}</h2>
              </TotalCorn>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: "1rem",
                }}
              >
                <p style={{ color: "gray", fontSize: 22 }}>กรัม / g</p>
              </div>
            </BoxVarietiesTop>
          </ContentTop>
          <ContentMidle>
            <BoxAnalyzeMidle>
              <ContentMidleLeft>
                <HeaderBoxMidle>
                  <ImagePlot src={ProcessHeaderImage} />
                  <h2>สถานะการบันทึกข้อมูล</h2>
                </HeaderBoxMidle>
                <CircularProgress>
                  <CircularProgressbar
                    value={percentage}
                    // text={`${percentage}%`}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#219F94",
                      textColor: "#fff",
                      pathColor: "#fff",
                      trailColor: "transparent",
                    })}
                  />
                </CircularProgress>
                <BoxAmountPlot>
                  <h2>จำนวนการบันทึกรวมสะสม</h2>
                  <p>จำนวนข้าวโพด {status} ฝัก</p>
                </BoxAmountPlot>
              </ContentMidleLeft>
              <div
                style={{
                  position: "absolute",
                  alignContent: "center",
                  transform: "rotate(-0.25turn)",
                  marginTop: "9rem",
                  marginRight: "1rem",
                  color: "gray",
                }}
              >
                <p>ค่าน้ำหนักรวมก่อนปลอก ( กรัม / g )</p>
              </div>
              <ContentMidleRight>
                <HeaderBoxMidle>
                  <ImagePlot src={GrowthHeaderImage} />
                  <h2>การเปรียบเทียบค่าน้ำหนักก่อนปลอก</h2>
                </HeaderBoxMidle>
                <div style={{width:'300px',height:'23px',position:'absolute',backgroundColor:'#fff',marginLeft:'2rem',zIndex:99,marginTop:'4px'}}></div>
                <BoxBarsChart>
                  <div
                    style={{
                      position: "absolute",
                      alignContent: "center",
                      marginTop: "11rem",
                      color: "gray",
                    }}
                  >
                    <p>แปลงการปลูกข้าวโพด</p>
                  </div>
                  <BarsChart dataBarsChart={dataBarsChart} />
                </BoxBarsChart>
              </ContentMidleRight>
            </BoxAnalyzeMidle>
          </ContentMidle>
          <ContentBottom>
            <BoxbtmLeft>
              <PlotHeaderContent>
                <ImagePlot src={PieHeaderImage} />

                <h2>การเปรียบเทียบค่าน้ำหนักซังข้าวโพด</h2>
              </PlotHeaderContent>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "-10px",
                  color: "gray",
                }}
              >
                <p>แปลงการปลูกข้าวโพด</p>
              </div>
              <BoxBar>
                <div
                  style={{
                    position: "absolute",
                    alignContent: "center",
                    transform: "rotate(-0.25turn)",
                    marginRight: "30rem",
                    color: "gray",
                  }}
                >
                  <p>ค่าน้ำหนักซังข้าวโพด ( กรัม / g )</p>
                </div>
                <Bars dataBars={dataBars} />
              </BoxBar>
            </BoxbtmLeft>
            <BoxbtmRight>
              <PlotHeaderContent>
                <ImagePlot src={DoughnutHeaderImage} />

                <h2>การเทียบค่าน้ำหนักของเนื้อข้าวโพด</h2>
              </PlotHeaderContent>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "-10px",
                  color: "gray",
                }}
              >
                <p>แปลงการปลูกข้าวโพด</p>
              </div>
              <BoxDoungnet>
                <div
                  style={{
                    position: "absolute",
                    alignContent: "center",
                    transform: "rotate(-0.25turn)",
                    marginRight: "30rem",
                    marginTop: "9rem",
                    color: "gray",
                  }}
                >
                  <p>ค่าน้ำหนักเนื้อข้าวโพด ( กรัม / g )</p>
                </div>
                <Doughnuts dataDoughnut={dataDoughnut} />
              </BoxDoungnet>
            </BoxbtmRight>
          </ContentBottom>
        </BoxContent>
      </ContainerAnalyze>
    </>
  );
}
