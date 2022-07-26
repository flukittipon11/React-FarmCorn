import React, { useState, useEffect } from "react";
import Navbar from "./Navigate/Navbar";
import Sidebar from "./Navigate/Sidebar";
import style from "./css/recomend.module.css";
import ImageHeader from "../image/Recomend_header.jpg";
import Section_Weather from "./SectionRecomend/Section_Weather";
import { Link as Smooth } from "react-scroll";
import {
  RecommendContainer,
  MainRecommed,
  RecommendBoxContent,
  RecommendConntentOne,
  RecommendConntentTwo,
  RecOneContent,
  Rectitle,
  HeaderContentP,
  ImageHeaderRec,
  RecContentThreeBox,
  RecContentBox,
  RecContentP,
  RecContentBoxThree,
} from "./elements/RecomendElement";
import firebase from "../config";

export default function Recomend() {
  const [isOpen, setIsOpen] = useState(false);
  const [plotArr, setplotArr] = useState([]);
  const [dataArr, setdataArr] = useState([]);
  const [subData, setsubData] = useState([]);
  const [token, settoken] = useState([]);
  const [valueSum, setvalueSum] = useState([]);
  const firebaseRef = firebase.firestore().collection("Corn-growth");

  console.log("=" + valueSum[0]);
  useEffect(() => {
    getAllCollection();
    // getAlldata();
  }, []);

  function getAllCollection() {
    const AllData = [];
    const KeyData = [];
    const values = [];
    setdataArr([]);
    firebaseRef.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let arrsub = [];
        console.log(doc.id);
        firebaseRef
          .doc(doc.id)
          .collection("Sheath-Corn")
          .get()
          .then((res) => {
            res.docs.forEach((data) => {
              arrsub.push({
                key: data.id,
                ...data.data(),
              });
              let values = arrsub.reduce((a, b) => a + b);
              // console.log(values);
            });
            subData.push(arrsub);
          });
        values.push(subData);
        AllData.push({
          ...doc.data(),
          key: doc.id,
        });
        KeyData.push({
          key: doc.id,
        });
      });
      setvalueSum(values);
      settoken(KeyData);
      setplotArr(AllData);
    });
  }

  // function getAlldata() {
  //   token.map((res) => {
  //     const snapshot = firebaseRef.doc(res.key).collection("Sheath-Corn").get();
  //     return snapshot.docs.map((doc) => doc.data());
  //   });
  // }
  // async function fetchCollection() {
  //   await Promise.all(
  //     token.map((res) => {
  //       const boxArr = [];
  //       firebaseRef
  //         .doc(res.key)
  //         .collection("Sheath-Corn")
  //         .onSnapshot((querySnapshot) => {
  //           querySnapshot.forEach((doc) => {
  //             boxArr.push({
  //               ...doc.data(),
  //               key: doc.id,
  //             });
  //           });
  //           // console.log(dataArr.length);
  //           setdataArr(boxArr);
  //         });
  //     })
  //   );
  // }
  function renderData() {
    let totalRowSeed = [];
    for (let i = 0; i < valueSum.length; i++) {
      const element = valueSum[i];
      
    }
    
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <RecommendContainer>
        <MainRecommed>
          <RecommendBoxContent>
            <RecommendConntentOne>
              <RecOneContent>แนะนำการปลูกข้าวโพด</RecOneContent>
              <Rectitle>" ข้าวโพดเลี้ยงสัตว์ "</Rectitle>
              <HeaderContentP>
                นับเป็นพืชเศรษฐกิจที่มีบทบาทสำคัญยิ่งต่อประเทศไทย
                โดยเฉพาะภาคปศุสัตว์ เพราะเป็นวัตถุดิบหลักในอุตสาหกรรมอาหารสัตว์
                แต่ทุกวันนี้
                ประเทศไทยยังคงผลิตข้าวโพดเลี้ยงสัตว์ได้ไม่เพียงพอต่อความต้องการใช้ที่มีอัตราการขยายตัวเพิ่มสูงขึ้นทุกปี
                จึงต้องพึ่งพาการนำเข้าวัตถุดิบทดแทน เช่น ข้าวสาลี
                และนำเข้าเมล็ดข้าวโพดเลี้ยงสัตว์จากต่างประเทศ
              </HeaderContentP>
            </RecommendConntentOne>
            <RecommendConntentTwo>
              <ImageHeaderRec src={ImageHeader} />
            </RecommendConntentTwo>
          </RecommendBoxContent>
          <RecContentThreeBox>
            <RecContentBox>
              <RecContentP>
                ปลูกข้าวโพดเลี้ยงสัตว์ในแปลงนาที่ดินไม่สม่ำเสมอ
                จำเป็นต้องมีการเตรียมดินตั้งแต่ฤดูการทำนา คือ
                ไถดะและไถแปรพื้นที่นาเพื่อกำจัดวัชพืช
                และปรับพื้นที่ให้ราบเรียบสม่ำเสมอ
                เพื่อสะดวกในการให้น้ำและระบายน้ำออกจากแปลง
                พื้นที่นาควรมีหน้าดินลึกไม่ต่ำกว่า 30 เซนติเมตร
                เพื่อให้รากข้าวโพดเลี้ยงสัตว์สามารถเจริญเติบโต
                ดูดใช้น้ำและอาหารจากหน้าดินได้ดี
              </RecContentP>
            </RecContentBox>
            <RecContentBox>
              <RecContentP>
                แปลงนาที่เก็บเกี่ยวข้าวเสร็จแล้ว อาจมีเศษฟางและตอซังข้าวหนา
                ซึ่งเป็นอุปสรรคในการหยอดข้าวโพด
                เกษตรกรควรหมักฟางข้าวให้เปื่อยในระหว่างการเตรียมดิน
                และใช้โรตารีตีหมกฟางคลุกลงดิน หลังจากนั้นสูบน้ำใส่ให้ท่วม
                หมักทิ้งไว้ 7 วันก่อนไขน้ำออกและตากดินประมาณ 2 สัปดาห์
                จึงค่อยเตรียมดิน และควรหลีกเลี่ยงการเผาฟางข้าวในแปลงนา
                เพื่อเป็นการอนุรักษ์ดินและน้ำในดิน
              </RecContentP>
            </RecContentBox>
            <RecContentBoxThree>
              <RecContentP>
                ข้าวโพดเลี้ยงสัตว์ชอบดินที่มีลักษณะโปร่งและระบายน้ำดี
                โดยทั่วไปวิธีการเตรียมดินที่เหมาะสมสำหรับการปลูกข้าวโพดเลี้ยงสัตว์หลังนา
                เริ่มจากการไถดะโดยใช้รถไถผาน 3 หรือรถไถเดินตาม
                หลังเก็บเกี่ยวข้าว ตากแปลงไว้อย่างน้อย 5 - 7 วัน
                เพื่อทำลายวัชพืชก่อน จึงไถแปรโดยใช้รถไถผาน 7
                ไถย่อยดินให้ร่วนซุยเพื่อเก็บกักความชื้นในดินและให้มีสภาพเหมาะแก่การเพาะปลูก
              </RecContentP>
            </RecContentBoxThree>
          </RecContentThreeBox>
        </MainRecommed>
      </RecommendContainer>
    </>
  );
}
