import React, { Component, useState } from "react";
// import style from "../css/ShowDetail.module.css";
// import Navbar from "../navigateBar/Navbar";
import firebase from "../config";
import userImg from "../image/man.png";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox/SearchBox";
import ImageFarm from "../image/logoApp.png";
import status from "../image/test.png";
import { ProgressBar } from "react-bootstrap";
import { LinearProgress } from "@material-ui/core";
import AllCollectionData from "./Section/AllCollectionData";

export class ShowDetailScreen extends Component {
  constructor() {
    super();

    this.firestoreRef = firebase.firestore().collection("Corn-growth");
    this.state = {
      user: null,
      isLoading: true,
      userArr: [],
      ArrData: [],
      searchField: "",
      KeyCorn: [],
      key: "",
      SheathCorn: "",
      // statusData:0,
      Length_SheathBefore: null,
      Width_SheathBefore: "",
      value: 0,
    };
    this.ArrData = [];
  }
  /****************** function UploadImage********************/
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({
        user: user,
      });
    });
    this.dbRefArr = firebase.firestore().collection("Corn-growth");
    this.dbRefArr.get().then((res) => {
      if (res.exists) {
        const farm = res.data();
        this.setState({
          key: res.id,
        });
      } else {
        console.log("Document does not exist");
      }
    });
    // firebase
    //   .firestore()
    //   .collection("Corn-growth")
    //   .onSnapshot((snapshot) => {
    //     snapshot.data()
    //   });
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
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
        Corn_Varieties,
        statusData,
      } = res.data();
      userArr.push({
        key: res.id,
        res,
        Farm_name,
        Farm_place,
        Farm_width,
        Detail,
        Date,
        Corn_Varieties,
        statusData,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
    });
    // console.log(userArr);
  };

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <h3>Loading</h3>
        </div>
      );
    }

    // console.log(this.state.Length);

    // console.log(JSON.stringify(this.state.ArrData[0]));

    const { userArr, ArrData } = this.state;
    console.log(ArrData);
    // userArr.map((doc,i)=>{
    //   firebase
    //   .firestore()
    //   .collection("Corn-growth")
    //   .doc(doc.key)
    //   .collection("Sheath-Corn")
    //   .onSnapshot((snapshot) => {
    //     const ArrData = [];
    //     snapshot.forEach((res) => {
    //       ArrData.push(res);
    //     });
    //     this.setState({
    //       ArrData: ArrData,
    //       isLoading:false
    //     });
    //   });
    //   // console.log(ArrData);
    // });
    // console.log(ArrData);

    // userArr.map((doc) => {
    //   console.log(doc.res);
    //   doc.res.map((arr)=>{
    //     console.log(arr);
    //   })
    // });
    // console.log(JSON.stringify(this.ArrData));
    // console.log(ArrData);
    // console.log(JSON.stringify([1,2,3]));
    // console.log(ArrData);
    // userArr.forEach((key) => {
    //   const RefDB = firebase
    //     .firestore()
    //     .collection("Corn-growth")
    //     .doc(key.key)
    //     .collection("Sheath-Corn");
    //   const SheathArr = [];
    //   RefDB.get().then((querySnapShot) => {
    //     querySnapShot.forEach((res) => {
    //       const { Farm_name, SheathCorn } = res.data();
    //       SheathArr.push({
    //         key: res.id,
    //         res,
    //         SheathCorn,
    //       });
    //     });
    //   });
    // });

    // console.log(this.state.user.email);
    // console.log(ArrData);
    return (
      <>
      </>
      // <div className={style.body}>
      //   <div className={style.main}>
      //     <div className={style.header}>
      //       <h2>ข้อมูลการบันทึก</h2>
      //     </div>
      //     <div>{/* <AllCollectionData /> */}</div>
      //     <div className={style.container}>
      //       <div className={style.box_Left}>
      //         <div className={style.Left_header}>
      //           <div
      //             style={{
      //               display: "flex",
      //               justifyContent: "center",
      //               marginBottom: "10px",
      //             }}
      //           >
      //             <h3
      //               style={{
      //                 fontSize: 27,
      //                 fontWeight: "bold",
      //                 color: "#1E6F5C",
      //               }}
      //             >
      //               สถานะการบันทึก
      //             </h3>
      //           </div>
      //           {
      //             // console.log(this.state.ArrData);
      //             userArr.map((res, i) => {
      //               // console.log(res.key);
      //               // const keyData = res.key;
      //               // firebase
      //               //   .firestore()
      //               //   .collection("Corn-growth/{keyData}")
      //               //   .doc(keyData)
      //               //   .collection("Sheath-Corn");
      //               // this.state = { ArrData: [] };
      //               // ()=>{
      //               //   const RefDB = firebase
      //               //   .firestore()
      //               //   .collection("Corn-growth")
      //               //   .doc(res.key)
      //               //   .collection("Sheath-Corn").onSnapshot(snapshot=>{
      //               //     const ArrData = [];
      //               //     snapshot.forEach(doc=>{
      //               //       ArrData.push(doc)
      //               //     })
      //               //     this.setState({
      //               //       ArrData:ArrData
      //               //     })
      //               //   })
      //               //   return () => RefDB();
      //               // }
      //               // const SheathData = await RefDB.get();

      //               return (
      //                 <div className={style.box_percentage}>
      //                   <div className={style.main_percentage}>
      //                     <div className={style.container_name}>
      //                       <div className={style.centerStatus}>
      //                         <img
      //                           src={status}
      //                           style={{
      //                             width: 45,
      //                             height: 45,
      //                             marginRight: 10,
      //                           }}
      //                         />
      //                       </div>
      //                       <text
      //                         style={{
      //                           fontWeight: "bold",
      //                           color: "#22577A",
      //                         }}
      //                       >
      //                         {res.Farm_name}
      //                       </text>
      //                     </div>
      //                     <div style={{ width: "30%" }}>
      //                       <progress value={res.statusData} max={10} />
      //                     </div>
      //                   </div>
      //                 </div>
      //               );
      //             })
      //           }
      //         </div>
      //       </div>
      //       <div className={style.box_Right}>
      //         <div className={style.Right_header}>
      //           <div style={{ display: "flex", justifyContent: "center" }}>
      //             <h3
      //               style={{
      //                 fontSize: 27,
      //                 fontWeight: "bold",
      //                 color: "#fff",
      //               }}
      //             >
      //               เลือกแปลงการปลูก
      //             </h3>
      //           </div>
      //         </div>
      //         <div className={style.box_Farm}>
  
      //           {userArr.map((item, i) => {
      //             // console.log(item);
      //             return (
      //               <div className={style.boxPlot}>
      //                 <Link
      //                   style={{ textDecoration: "none" }}
      //                   key={i}
      //                   to={{
      //                     pathname: `/showScreen/showDataFarm/${item.Farm_name}`,
      //                     state: {
      //                       userKey: item.key,
      //                     },
      //                   }}
      //                 >
      //                   <div
      //                     style={{
      //                       display: "flex",
      //                       justifyContent: "center",
      //                     }}
      //                   >
      //                     <img
      //                       src={ImageFarm}
      //                       style={{ width: 65, height: 65 }}
      //                     />
      //                   </div>
      //                   <div className={style.hoverHeader}>
      //                     <div style={{ textAlign: "center" }}>
      //                       <h2
      //                         style={{
      //                           marginTop: 15,
      //                           fontSize: 23,
      //                           fontWeight: "bold",
      //                         }}
      //                       >
      //                         {item.Farm_name}
      //                       </h2>
      //                     </div>
      //                     <div className={style.boxWidth}>
      //                       <p>สถานที่ : {item.Farm_place} </p>
      //                       <p>ความกว้างของแปลง : {item.Farm_width} </p>
      //                       <p>พันธุ์ข้าวโพด : {item.Corn_Varieties} </p>
      //                     </div>
      //                   </div>
      //                 </Link>
      //               </div>
      //             );
      //           })}
      //         </div>  
      //       </div>
      //     </div>
      //   </div>
      //   {/* <div className={style.containerCard}>
      //     <h2 className={style.header}>แสดงข้อมูลการปลูก</h2>
      //   </div>
      //   <div className={style.box}>
      //     <div className={style.boxContent}>
      //       <div className={style.ContentLeft}>
      //         <img src={userImg} className={style.image} />
      //       </div>
      //       <div className={style.ContentRight}>
      //         <h3>Username : Ittipon Sabaijit</h3>
      //         <p>E-mail : {this.state.user.email}</p>
      //       </div>
      //     </div>
      //   </div>
      //   <div className={style.boxFarm}>
      //     {this.state.userArr.map((item, i) => {
      //       return (
      //         <div className={style.boxPlot}>
      //           <Link
      //             style={{ textDecoration: "none" }}
      //             key={i}
      //             to={{
      //               pathname: `/showScreen/showDataFarm/${item.Farm_name}`,
      //               state: {
      //                 userKey: item.key,
      //               },
      //             }}
      //           >
      //             <div className={style.boxheader}>
      //               <img src={ImageFarm} style={{width:65,height:65}}/>
      //               <h2 style={{marginTop:11,fontSize:23}}>{item.Farm_name}</h2>
      //             </div>
      //             <div className={style.boxWidth}>
      //               <p>สถานที่ : {item.Farm_place} </p>
      //               <p>ความกว้างของแปลง : {item.Farm_width} </p>
      //               <p>พันธุ์ข้าวโพด : {item.Corn_Varieties} </p>
      //             </div>
      //           </Link>
      //         </div>
      //       );
      //     })}
      //   </div> */}
      // </div>
    );
  }
}

export default ShowDetailScreen;
