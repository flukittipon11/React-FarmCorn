// import React, { useEffect, useState } from "react";
// import { Link as Scroll } from "react-scroll";
// import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
// // import style from "../../css/import style from "../css/Calculate.module.css"

// export default function Header() {
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     setChecked(true);
//   }, []);
//   return (
//     <Collapse>
//       <div className={style.main_Group}>
//         <div className={style.group}>
//           <a href="#" className={style.two}>
//             <span className={style.Span}>I AM COOL TOO</span>
//             <div className={style.bg}></div>
//           </a>
//           <a href="#" class={style.one}>
//             I AM COOL
//           </a>
//         </div>
//       </div>
//       <div className={style.header}>
//         <text className={style.header_title}>Data Analysis</text>
//         <p className={style.header_detail}>การคำนวนตารางข้อมูล </p>
//       </div>
//       <div className={style.box_DataAnalyze}>
//         <div className={style.box_RightData}>
//           <div className={style.title_grahp}>
//             <text className={style.text_titleGraph}>
//               การเปรียบเทียบค่าในแต่ละแปลง
//             </text>
//             <div className={style.chart}>
//               <Chart
//                 chartData={this.state.chartData}
//                 location="Massachusetts"
//                 legendPosition="bottom"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={style.box_Data_one}>
//           <div className={style.box_dataDate}></div>
//         </div>
//         <div className={style.box_Data_two}>
//           <div className={style.box_dataDate}></div>
//         </div>
//         <div className={style.box_Data_three}>
//           <div className={style.box_dataDate}></div>
//         </div>
//         <div className={style.box_Bar}>
//           <div className={style.box_BarAnalyze_Left}>
//             <text className={style.text_titleGraph}>
//               การเปรียบเทียบค่าในแต่ละแปลง
//             </text>
//           </div>
//           <div className={style.box_BarAnalyze_Right}>
//             <text className={style.text_titleGraph}>
//               การเปรียบเทียบค่าในแต่ละแปลง
//             </text>
//           </div>
//         </div>
//       </div>
//       <div className={style.box_selectFarm}>
//         <div className={style.box_BarAnalyze_Right}>
//           <text className={style.text_titleGraph}>
//             การเปรียบเทียบค่าในแต่ละแปลง
//           </text>
//         </div>
//       </div>
//     </Collapse>
//   );
// }
