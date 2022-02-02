import React, { Component } from "react";
import firebase from "../config";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
  {
    Mean1: 24.5,
    Mean2: 4.1,
    Mean3: 206.6,
    Mean4: 181.4,
    Mean5: 5,
    Mean6: 96.6,
    Mean7: 3.28,
    Mean8: 13.8,
    Mean9: 1.1,
    Mean10: 12.4,
    Mean11: 22.6,
    Mean12: 1.56,
    Mean13: 0.48,
    Mean14: 49.4,
    Mean15: 47.2,
  },
];
const dataSet2 = [
  {
    Date: "18/09/2020",
    data1: 6,
    data2: 1523,
    data3: 560,
  },
  {
    Date: "20/09/2020",
    data1: 12,
    data2: 1969,
    data3: 526,
  },
];

export default class ExportData extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      No_Sheath: [],
      key: "",
      Date: "",
      Farm_name: "",
      Farm_place: "",
      Farm_width: "",
      Detail: "",
      SheathCorn: 0,
      Length_SheathBefore: null,
      Width_SheathBefore: 0,
      Weight_BeforeCasing: 0,
      Weight_BeforeBreakStem: 0,
      Husk_Cover: 0,
      Weight_AfterCasing: 0,
      Diameter_Size: 0,
      Total_LengthCorn: 0,
      Total_NotAttached: 0,
      Total_RowSeed: 0,
      Total_Seed: 0,
      Size_CornCob: 0,
      Size_CornSeed: 0,
      TotalWeigt_CornCob: 0,
      TotalWeigt_CornMeat: 0,
      isLoading: true,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        user: user,
      });
    });
    const { userKey } = this.props.location.state;
    console.log("key:", userKey);
    this.firestoreRef = firebase
      .firestore()
      .collection("Corn-growth")
      .doc(userKey)
      .collection("Sheath-Corn");
    const dbRef = firebase.firestore().collection("Corn-growth").doc(userKey);
    dbRef.get().then((res) => {
      if (res.exists) {
        const farm = res.data();
        this.setState({
          key: res.id,
          Date: farm.Date,
          Farm_name: farm.Farm_name,
          Farm_place: farm.Farm_place,
          Farm_width: farm.Farm_width,
          Detail: farm.Detail,
          SheathCorn: farm.SheathCorn,
          Length_SheathBefore: farm.Length_SheathBefore,
          Width_SheathBefore: farm.Width_SheathBefore,
          Weight_BeforeCasing: farm.Weight_BeforeCasing,
          Weight_BeforeBreakStem: farm.Weight_BeforeBreakStem,
          Husk_Cover: farm.Husk_Cover,
          Weight_AfterCasing: farm.Weight_AfterCasing,
          Diameter_Size: farm.Diameter_Size,
          Total_LengthCorn: farm.Total_LengthCorn,
          Total_NotAttached: farm.Total_NotAttached,
          Total_RowSeed: farm.Total_RowSeed,
          Total_Seed: farm.Total_Seed,
          Size_CornCob: farm.Size_CornCob,
          Size_CornSeed: farm.Size_CornSeed,
          TotalWeigt_CornCob: farm.TotalWeigt_CornCob,
          TotalWeigt_CornMeat: farm.TotalWeigt_CornMeat,
          Corn_Varieties: farm.Corn_Varieties,
          isLoading: false,
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    console.log(this.state.Husk_Cover);
    return (
      <>
      </>
      // <div className={style.main}>
      //   <Navbar />
      //   <div className={style.container}>
      //     <div className={style.header}>
      //       <text style={{ fontSize: 35, fontWeight: "bold" }}>
      //         ข้อมูลการคำนวน
      //       </text>
      //     </div>
      //     <div className={style.box_data}>
      //       <div className={style.data_Left}>
      //         <text
      //           style={{
      //             fontSize: 20,
      //             fontWeight: "bold",
      //             marginBottom: 10,
      //             color: "#5E454B",
      //           }}
      //         >
      //           ค่าเฉลี่ย
      //         </text>
      //         <table id="vertical-1" className={style.table}>
      //           <tr>
      //             <th>ขนาดก่อนปลอกส่วนของความยากฝัก</th>
      //             <td colSpan="3">24.5</td>
      //           </tr>
      //           <tr>
      //             <th>ขนาดก่อนปลอกส่วนของความกว้างฝัก</th>
      //             <td colSpan="3">4.1</td>
      //           </tr>
      //           <tr>
      //             <th>น้ำหนักก่อนปลอกรวมก้าน</th>
      //             <td colSpan="3">206.6</td>
      //           </tr>
      //           <tr>
      //             <th>น้ำหนักก่อนปลอกหักก้าน</th>
      //             <td colSpan="3">181.4</td>
      //           </tr>
      //           <tr>
      //             <th>Huck Cover</th>
      //             <td colSpan="3">5</td>
      //           </tr>
      //           <tr>
      //             <th>น้ำหนักหลังปอก ( กรัม )</th>
      //             <td colSpan="3">96.6</td>
      //           </tr>
      //           <tr>
      //             <th>ขนาดฝักหลังปลอก D ( เซนติเมตร )</th>
      //             <td colSpan="3">3.28</td>
      //           </tr>
      //           <tr>
      //             <th>ขนาดฝักหลังปลอก L1 ( เซนติเมตร )</th>
      //             <td colSpan="3">13.8</td>
      //           </tr>
      //           <tr>
      //             <th>ขนาดฝักหลังปลอก L2 ( เซนติเมตร )</th>
      //             <td colSpan="3">1.1</td>
      //           </tr>
      //           <tr>
      //             <th>จำนวนแถว</th>
      //             <td colSpan="3">12.4</td>
      //           </tr>
      //           <tr>
      //             <th>จำนวนเมล็ด</th>
      //             <td colSpan="3">22.6</td>
      //           </tr>
      //           <tr>
      //             <th>ขนาดของซัง ( เซนติเมตร )</th>
      //             <td colSpan="3">1.56</td>
      //           </tr>
      //           <tr>
      //             <th>ขนาดของเมล็ด ( เซนติเมตร )</th>
      //             <td colSpan="3">0.48</td>
      //           </tr>
      //           <tr>
      //             <th>น้ำหนักซัง ( กรัม )</th>
      //             <td colSpan="3">49.4</td>
      //           </tr>
      //           <tr>
      //             <th>น้ำหนักเนื้อ ( กรัม )</th>
      //             <td colSpan="3">47.2</td>
      //           </tr>
      //         </table>
      //       </div>
      //       <div>
      //         <div className={style.data_Right}>
      //           <div className={style.boxTotal}>
      //             <text
      //               style={{
      //                 textAlign: "center",
      //                 fontSize: 20,
      //                 fontWeight: "bold",
      //                 marginBottom: 10,
      //                 color: "#5E454B",
      //               }}
      //             >
      //               ยอดรวมแปลงการปลูก
      //             </text>
      //             <div className={style.data_Right_table}>
      //               <table className={style.table_totalData}>
      //                 <tr>
      //                   <th rowspan="2">วัน / เดือน / ปี</th>
      //                   <th rowspan="2">จำนวนฝัก</th>
      //                   <th colspan="2">ขนาดก่อนปลอก(ซม.)</th>
      //                 </tr>
      //                 <tr>
      //                   <th>ก่อนปลอก</th>
      //                   <th>หลังปลอก</th>
      //                 </tr>
      //                 <tr>
      //                   <td>18/09/2020</td>
      //                   <td>6</td>
      //                   <td>1523</td>
      //                   <td>560</td>
      //                 </tr>
      //                 <tr>
      //                   <td>20/09/2020</td>
      //                   <td>12</td>
      //                   <td>1969</td>
      //                   <td>526</td>
      //                 </tr>
      //                 <tr>
      //                   <td></td>
      //                   <td></td>
      //                   <td></td>
      //                   <td></td>
      //                 </tr>
      //                 <tr>
      //                   <td></td>
      //                   <td></td>
      //                   <td></td>
      //                   <td></td>
      //                 </tr>
      //               </table>
      //             </div>
      //           </div>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             justifyContent: "flex-end",
      //           }}
      //         >
      //           <ExcelFile
      //             filename="Average Data"
      //             element={
      //               <button className={style.btn_export}>Export Data</button>
      //             }
      //           >
      //             <ExcelSheet data={dataSet1} name="Avarage">
      //               <ExcelColumn label="ขนาดก่อนปลอกส่วนของความยากฝัก" value="Mean1" />
      //               <ExcelColumn label="ขนาดก่อนปลอกส่วนของความกว้างฝัก" value="Mean2" />
      //               <ExcelColumn label="น้ำหนักก่อนปลอกรวมก้าน" value="Mean3" />
      //               <ExcelColumn label="น้ำหนักก่อนปลอกหักก้าน" value="Mean4" />
      //               <ExcelColumn label="Huck Cover" value="Mean5" />
      //               <ExcelColumn label="น้ำหนักหลังปอก" value="Mean6" />
      //               <ExcelColumn label="ขนาดฝักหลังปลอก D" value="Mean7" />
      //               <ExcelColumn label="ขนาดฝักหลังปลอก L1" value="Mean8" />
      //               <ExcelColumn label="ขนาดฝักหลังปลอก L2" value="Mean9" />
      //               <ExcelColumn label="จำนวนแถว" value="Mean10" />
      //               <ExcelColumn label="จำนวนเมล็ด" value="Mean11" />
      //               <ExcelColumn label="ขนาดของซัง" value="Mean12" />
      //               <ExcelColumn label="ขนาดของเมล็ด" value="Mean13" />
      //               <ExcelColumn label="น้ำหนักซัง" value="Mean14" />
      //               <ExcelColumn label="น้ำหนักเนื้อ" value="Mean15" />
      //             </ExcelSheet>
      //             <ExcelSheet data={dataSet2} name="total Data">
      //               <ExcelColumn label="Date" value="Date" />
      //               <ExcelColumn label="จำนวนฝัก" value="data1" />
      //               <ExcelColumn label="ขนาดก่อนปลอก" value="data2" />
      //               <ExcelColumn label="ขนาดหลังปลอก" value="data3" />
      //             </ExcelSheet>
      //           </ExcelFile>
      //         </div>

      //         {/* <div className={style.data_Right_bottom}>
      //           <div>
      //             <text style={{ fontSize: 50, fontWeight: "bold" }}>
      //               Other information
      //             </text>
      //           </div>
      //         </div> */}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
