import React, { useState, useEffect } from "react";
import firebase from "../config";
// import Navbar from "../navigateBar/Navbar";
// import style from "../css/ShowGetdata.module.css";
import ReactExport from "react-export-excel";
import moment from "moment";
import Navbar from "./Navigate/Navbar";
import Sidebar from "./Navigate/Sidebar";
import ImagePlots from "../image/PlotImage.jpeg";
import iconTooltip from "../image/tooltip.png";
import { useLocation } from "react-router-dom";
import {
  BoxBtnexport,
  BoxContent,
  BoxHeaderText,
  BoxHusk,
  BoxImagePlot,
  BoxPlotName,
  BoxSize,
  BoxTable,
  BoxTooltip,
  ButtonExport,
  Container,
  ContentPlotname,
  HuckContainer,
  IconTooltip,
  ImagePlot,
  MainScreen,
  SizeContainer,
  Table,
  TableTD,
  TableTH,
  TableTR,
  TextHeader,
  TextHeaderHusk,
  TextHeaderSize,
  // HeaderShow,
  TextNamePlot,
  TextTitleHusk,
  TextTitlePlot,
  TextTitleSize,
} from "./elements/ShowGetDataElement";
import { SizeBackground } from "./elements/CalculateElement";
import Tootip from "./Tooltip/Tootip";
import { HeaderShow } from "./elements/ShowDataElements";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ShowGetdata() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const [DataPlot, setDataPlot] = useState([]);
  const [Farm_name, setFarm_name] = useState("");
  const [Farm_place, setFarm_place] = useState("");
  const [Farm_width, setFarm_width] = useState("");
  const [Corn_Varieties, setCorn_Varieties] = useState("");
  const [dataSum, setDatasum] = useState(0);

  const dbRefPlot = firebase.firestore().collection("Corn-growth");
  const { userKey } = location.state;
  console.log(userKey);
  const firebaseRef = dbRefPlot.doc(userKey).collection("Sheath-Corn");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    getDataPlot();
    dbRefPlot
      .doc(userKey)
      .get()
      .then((res) => {
        if (res.exists) {
          const farm = res.data();
          setFarm_name(farm.Farm_name);
          setFarm_place(farm.Farm_place);
          setFarm_width(farm.Farm_width);
          setCorn_Varieties(farm.Corn_Varieties);
        } else {
          console.log("Document does not exist!");
        }
      });
  }, []);

  function getDataPlot() {
    setLoading(true);
    firebaseRef.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setDataPlot(items);
      setLoading(false);
    });
  }
  let No_Sheath = DataPlot.sort((a, b) => {
    return a.TotalWeigt_CornMeat - b.TotalWeigt_CornMeat;
  });
  const returnTableData = () => {
    if (No_Sheath.length == 0)
      return (
        <tr
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "30vh",
          }}
        >
          <td colSpan="17">
            <h1 style={{ fontSize: "24px", fontWeight: 400, color: "gray" }}>
              ไม่มีข้อมูล
            </h1>
          </td>
        </tr>
      );
    else {
      console.log(No_Sheath);

      return No_Sheath.map((item, i) => {
        let date = item.Date;
        let resultDate = moment(date).format("DD/MM/YYYY");
        if (resultDate == "Invalid date") {
          resultDate = "ไม่มีวันที่";
        }

        // console.log(sum);

        // const reducer = (accumlator,curr) =>accumlator+curr;
        // let sum = item.TotalWeigt_CornMeat
        return (
          <TableTR key={i}>
            <TableTD>{resultDate}</TableTD>
            <TableTD>{item.SheathCorn}</TableTD>
            <TableTD>{item.Length_SheathBefore}</TableTD>
            <TableTD>{item.Width_SheathBefore}</TableTD>
            <TableTD>{item.Weight_BeforeCasing}</TableTD>
            <TableTD>{item.Weight_BeforeBreakStem}</TableTD>
            <TableTD>{item.Husk_Cover}</TableTD>
            <TableTD>{item.Weight_AfterCasing}</TableTD>
            <TableTD>{item.Diameter_Size}</TableTD>
            <TableTD>{item.Total_LengthCorn}</TableTD>
            <TableTD>{item.Total_NotAttached}</TableTD>
            <TableTD>{item.Total_RowSeed}</TableTD>
            <TableTD>{item.Total_Seed}</TableTD>
            <TableTD>{item.Size_CornCob}</TableTD>
            <TableTD>{item.Size_CornSeed}</TableTD>
            <TableTD>{item.TotalWeigt_CornCob}</TableTD>
            <TableTD>{item.TotalWeigt_CornMeat}</TableTD>
          </TableTR>
        );
      });
    }
  };

  let sumArr = [];

  for (let i = 0; i < No_Sheath.length; i++) {
    sumArr.push(No_Sheath[i].TotalWeigt_CornMeat);
  }
  let totalMeat = sumArr.reduce((a, b) => a + b, 0);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Container>
        <MainScreen>
          <HeaderShow>
            <h2>ตารางการบันทึกข้อมูล</h2>
            <p>ข้อมูลการบันทึกการเจริญเติบโตของข้าวโพด</p>
          </HeaderShow>
          <BoxContent>
            <BoxPlotName>
              <BoxImagePlot>
                <ImagePlot src={ImagePlots} />
              </BoxImagePlot>
              <ContentPlotname>
                <TextNamePlot>{Farm_name}</TextNamePlot>
                <TextTitlePlot>สถานที่ : {Farm_place}</TextTitlePlot>
                <TextTitlePlot>ขนาดแปลง : {Farm_width}</TextTitlePlot>
                <TextTitlePlot>พันธุ์ : {Corn_Varieties}</TextTitlePlot>
              </ContentPlotname>
            </BoxPlotName>
            <BoxTooltip>
              <Tootip direction="left" delay="200">
                <IconTooltip src={iconTooltip} />
              </Tootip>
            </BoxTooltip>
          </BoxContent>
          <BoxTable>
            <Table>
              <TableTR>
                <TableTH rowSpan="2">วัน / เดือน / ปี</TableTH>
                <TableTH rowSpan="2">ฝักที่</TableTH>
                <TableTH colSpan="2">ขนาดก่อนปลอก(ซม.)</TableTH>
                <TableTH colSpan="2">น้ำหนักก่อนปลอก(กรัม)</TableTH>
                <TableTH rowSpan="2">Husk Cover</TableTH>
                <TableTH rowSpan="2">น้ำหนักหลังปอก(กรัม)</TableTH>
                <TableTH colSpan="3">ขนาดหลังปอก(ซม.)</TableTH>
                <TableTH colSpan="2">จำนวนแถว</TableTH>
                <TableTH colSpan="2">ขนาด(ซม.)</TableTH>
                <TableTH rowSpan="2">น้ำหนักซัง(กรัม)</TableTH>
                <TableTH rowSpan="2">น้ำหนักเนื้อ(กรัม)</TableTH>
              </TableTR>
              <TableTR>
                <TableTH>ยาวฝัก</TableTH>
                <TableTH>กว้างฝัก</TableTH>
                <TableTH>รวมก้าน</TableTH>
                <TableTH>หักก้าน</TableTH>
                <TableTH>D</TableTH>
                <TableTH>L1</TableTH>
                <TableTH>L2</TableTH>
                <TableTH>แถว</TableTH>
                <TableTH>เมล็ด</TableTH>
                <TableTH>ซัง</TableTH>
                <TableTH>เมล็ด</TableTH>
              </TableTR>
              {returnTableData()}
            </Table>
          </BoxTable>
          {/* <div>
            <h2>น้ำหนักรวมทั้งหมด = {totalMeat}</h2>
          </div> */}
          <BoxBtnexport>
            <ExcelFile
              filename={"Sheath Corn " + "DataExport"}
              element={<ButtonExport>Export Data</ButtonExport>}
            >
              <ExcelSheet data={No_Sheath} name="DataCorn">
                <ExcelColumn label="วัน/เดือน/ปี" value="Date" />
                <ExcelColumn label="ฝักที่" value="SheathCorn" />
                <ExcelColumn
                  label="ความยาวฝักก่อนปลอก"
                  value="Length_SheathBefore"
                />
                <ExcelColumn
                  label="ความกว้างฝักก่อนปลอก"
                  value="Width_SheathBefore"
                />
                <ExcelColumn
                  label="น้ำหนักก่อนปลอก(รวมก้าน)"
                  value="Weight_BeforeCasing"
                />
                <ExcelColumn
                  label="น้ำหนักก่อนปลอก(หักก้าน)"
                  value="Weight_BeforeBreakStem"
                />
                <ExcelColumn label="Huck Cover" value="Husk_Cover" />
                <ExcelColumn
                  label="น้ำหนักหลังปอก"
                  value="Weight_AfterCasing"
                />
                <ExcelColumn label="ขนาดหลังปลอก(D)" value="Diameter_Size" />
                <ExcelColumn
                  label="ขนาดหลังปลอก(L1)"
                  value="Total_LengthCorn"
                />
                <ExcelColumn
                  label="ขนาดหลังปลอก(L2)"
                  value="Total_NotAttached"
                />
                <ExcelColumn label="จำนวนแถว" value="Total_RowSeed" />
                <ExcelColumn label="จำนวนเมล็ด" value="Total_Seed" />
                <ExcelColumn label="ขนาดซัง" value="Size_CornCob" />
                <ExcelColumn label="ขนาดเมล็ด" value="Size_CornSeed" />
                <ExcelColumn label="น้ำหนักซัง" value="TotalWeigt_CornCob" />
                <ExcelColumn label="น้ำหนักเนื้อ" value="TotalWeigt_CornMeat" />
              </ExcelSheet>
            </ExcelFile>
          </BoxBtnexport>
        </MainScreen>
      </Container>
    </>
  );
}
