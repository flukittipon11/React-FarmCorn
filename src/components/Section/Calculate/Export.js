import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../../config";
import style from "../../css/Calculate.module.css";
import profile from "../../../image/field.png";
import piccorn from "../../../image/cornwall2.jpg";
import man from "../../../image/man.png";
import user from "../../../image/teamwork.png";
import ImageFarm from "../../../image/logoApp.png";
import Pic_content from "../../../image/bgdash.jpg";
import timetable from "../../../image/timetable.png";
import calculator from "../../../image/calculator.png";
import responsive from "../../../image/responsive.png";
import { Link as Smooth } from "react-scroll";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class Export extends Component {
  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection("Corn-growth");
    this.state = {
      userArr: [],
      ArrSheathCorn: [],
      chartData: {},
      user: null,
      No_Sheath: [],
      userArr: [],
      key: "",
      Date: "",
      Farm_name: "",
      Farm_place: "",
      Farm_width: "",
      Detail: "",
      SheathCorn: "",
      Length_SheathBefore: null,
      Width_SheathBefore: "",
      Weight_BeforeCasing: "",
      Weight_BeforeBreakStem: "",
      Husk_Cover: "",
      Weight_AfterCasing: "",
      Diameter_Size: "",
      Total_LengthCorn: "",
      Total_NotAttached: "",
      Total_RowSeed: "",
      Total_Seed: "",
      Size_CornCob: "",
      Size_CornSeed: "",
      TotalWeigt_CornCob: "",
      TotalWeigt_CornMeat: "",
      isLoading: true,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      this.setState({
        user: user,
      });
    });
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Plot No 201",
          "test1",
          "Plot 1",
          "Plot 202",
          "Plot 212",
          "Plot 202",
        ],
        datasets: [
          {
            label: "Population",
            data: [121, 230, 114, 135,],
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
      },
    });
  }
  getCollection = (querySnapShot) => {
    const userArr = [];
    querySnapShot.forEach((res) => {
      const {
        Farm_name,
        Farm_place,
        Farm_width,
        Detail,
        Date,
        SheathCorn,
        Length_SheathBefore,
        Width_SheathBefore,
        Weight_BeforeCasing,
        Weight_BeforeBreakStem,
        Husk_Cover,
        Mean_Length_SheathBefore,
        Mean_Width_SheathBefore,
        Mean_Weight_BeforeCasing,
        Mean_Weight_BeforeBreakStem,
        Mean_Husk_Cover,
        Mean_Weight_AfterCasing,
        Mean_Diameter_Size,
        Mean_Total_LengthCorn,
        Mean_Total_NotAttached,
        Mean_Total_RowSeed,
        Mean_Total_Seed,
        Mean_Size_CornCob,
        Mean_Size_CornSeed,
        Mean_TotalWeigt_CornCob,
        Mean_TotalWeigt_CornMeat,
        Weight_AfterCasing,
        Diameter_Size,
        Total_LengthCorn,
        Total_NotAttached,
        Total_RowSeed,
        Total_Seed,
        Size_CornCob,
        Size_CornSeed,
        TotalWeigt_CornCob,
        TotalWeigt_CornMeat,
        Corn_Varieties,
      } = res.data();
      userArr.push({
        key: res.id,
        res,
        Farm_name,
        Farm_place,
        Farm_width,
        Detail,
        Mean_Length_SheathBefore,
        Mean_Width_SheathBefore,
        Mean_Weight_BeforeCasing,
        Mean_Weight_BeforeBreakStem,
        Mean_Husk_Cover,
        Mean_Weight_AfterCasing,
        Mean_Diameter_Size,
        Mean_Total_LengthCorn,
        Mean_Total_NotAttached,
        Mean_Total_RowSeed,
        Mean_Total_Seed,
        Mean_Size_CornCob,
        Mean_Size_CornSeed,
        Mean_TotalWeigt_CornCob,
        Mean_TotalWeigt_CornMeat,
        Date,
        SheathCorn,
        Length_SheathBefore,
        Width_SheathBefore,
        Weight_BeforeCasing,
        Weight_BeforeBreakStem,
        Husk_Cover,
        Weight_AfterCasing,
        Diameter_Size,
        Total_LengthCorn,
        Total_NotAttached,
        Total_RowSeed,
        Total_Seed,
        Size_CornCob,
        Size_CornSeed,
        TotalWeigt_CornCob,
        TotalWeigt_CornMeat,
        Corn_Varieties,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
    });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    const { userArr } = this.state;

    return (
      <div className={style.main_Export}>
        <div id="section2">
          <div className={style.header_export}>
            <text className={style.header_title_Export}>Export Data </text>
            <p className={style.header_detail_Export}>
              การนำออกข้อมูลมาในรูปแบบตาราง
            </p>
          </div>
          <div className={style.btnExport}>
                <ExcelFile
                  filename="Average Data"
                  element={
                    <button style={{border:'none'}} className={style.btn_export}>Export Data</button>
                  }
                >
                  <ExcelSheet data={userArr} name="Avarage">
                    <ExcelColumn
                      label="ขนาดก่อนปลอกส่วนของความยากฝัก"
                      value="Mean_Weight_BeforeCasing"
                    />
                    <ExcelColumn
                      label="ขนาดก่อนปลอกส่วนของความกว้างฝัก"
                      value="Mean_Length_SheathBefore"
                    />
                    <ExcelColumn
                      label="น้ำหนักก่อนปลอกรวมก้าน"
                      value="Mean_Width_SheathBefore"
                    />
                    <ExcelColumn
                      label="น้ำหนักก่อนปลอกหักก้าน"
                      value="Mean_Weight_BeforeBreakStem"
                    />
                    <ExcelColumn label="Huck Cover" value="Mean_Husk_Cover" />
                    <ExcelColumn
                      label="น้ำหนักหลังปอก"
                      value="Mean_Weight_AfterCasing"
                    />
                    <ExcelColumn
                      label="ขนาดฝักหลังปลอก D"
                      value="Mean_Diameter_Size"
                    />
                    <ExcelColumn
                      label="ขนาดฝักหลังปลอก L1"
                      value="Mean_Total_LengthCorn"
                    />
                    <ExcelColumn
                      label="ขนาดฝักหลังปลอก L2"
                      value="Mean_Total_NotAttached"
                    />
                    <ExcelColumn label="จำนวนแถว" value="Mean_Total_RowSeed" />
                    <ExcelColumn label="จำนวนเมล็ด" value="Mean_Total_Seed" />
                    <ExcelColumn label="ขนาดของซัง" value="Mean_Size_CornCob" />
                    <ExcelColumn
                      label="ขนาดของเมล็ด"
                      value="Mean_Size_CornSeed"
                    />
                    <ExcelColumn
                      label="น้ำหนักซัง"
                      value="Mean_TotalWeigt_CornCob"
                    />
                    <ExcelColumn
                      label="น้ำหนักเนื้อ"
                      value="Mean_TotalWeigt_CornMeat"
                    />
                  </ExcelSheet>
                </ExcelFile>
              </div>
          <div className={style.box_selectFarm}>
            <div className={style.box_Farm}>
              <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
                {this.state.userArr.map((item, i) => {
                  let key_Collection = this.state.userArr[i].key;
                  const RefDB = firebase
                    .firestore()
                    .collection("Corn-growth")
                    .doc(key_Collection)
                    .collection("Sheath-Corn");
                  console.log(RefDB);
                  const ArrSheathCorn = [];

                  return (
                    <div className={style.box_ExportData}>
                      <Link
                        style={{ textDecoration: "none" }}
                        key={i}
                        to={{
                          pathname: `/showScreen/calculate/${item.Farm_name}`,
                          state: {
                            userKey: item.key,
                          },
                        }}
                      >
                        <div className={style.boxheader}>
                          <img
                            src={ImageFarm}
                            style={{ width: 40, height: 40, marginRight: 10 }}
                          />
                          <h2 style={{ marginTop: 11, fontSize: 23 }}>
                            {item.Farm_name}
                          </h2>
                        </div>
                        <div className={style.boxWidth}>
                          <p>สถานที่ : {item.Farm_place} </p>
                          <p>ความกว้างของแปลง : {item.Farm_width} </p>
                          <p>พันธุ์ข้าวโพด : {item.Corn_Varieties} </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={style.box_Content}>
            <div className={style.Content_calculate}>
              <div className={style.Left_content}>
                <img src={Pic_content} className={style.Content_Image} />
              </div>
              <div className={style.Right_corntent}>
                <div className={style.box_fomular}>
                  <div className={style.Image_type}>
                    <img src={calculator} className={style.size_image} />
                  </div>
                  <div className={style.text_fomular}>
                    <h2 style={{ fontWeight: "bold", color: "#fff" }}>
                      สูตรคำนวณหาค่าเฉลี่ย
                    </h2>
                    <p style={{ fontWeight: "bold", color: "#fff" }}>
                      ผลรวมข้อมูลทั้งหมด / จำนวนของข้อมูล = ค่าเฉลี่ย
                    </p>
                  </div>
                </div>
                <div className={style.box_fomular}>
                  <div className={style.Image_type}>
                    <img src={timetable} className={style.size_image} />
                  </div>
                  <div className={style.text_fomular}>
                    <h2 style={{ fontWeight: "bold", color: "#fff" }}>
                      สูตรคำนวณหาค่าเฉลี่ย
                    </h2>
                    <p style={{ fontWeight: "bold", color: "#fff" }}>
                      ผลรวมข้อมูลทั้งหมด / จำนวนของข้อมูล = ค่าเฉลี่ย
                    </p>
                  </div>
                </div>
                <div className={style.box_fomular}>
                  <div className={style.Image_type}>
                    <img src={responsive} className={style.size_image} />
                  </div>
                  <div className={style.text_fomular}>
                    <h2 style={{ fontWeight: "bold", color: "#fff" }}>
                      สูตรคำนวณหาค่าเฉลี่ย
                    </h2>
                    <p style={{ fontWeight: "bold", color: "#fff" }}>
                      ผลรวมข้อมูลทั้งหมด / จำนวนของข้อมูล = ค่าเฉลี่ย
                    </p>
                  </div>
                </div>
                {/* <h2 style={{fontSize:'20',fontWeight:'bold',color:'#515E63'}}>sadasdas</h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
