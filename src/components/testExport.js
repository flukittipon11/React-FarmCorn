import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: "M",
    is_married: true,
  },
  {
    name: "Monika",
    amount: 355000,
    sex: "F",
    is_married: false,
  },
  {
    name: "John",
    amount: 250000,
    sex: "M",
    is_married: false,
  },
  {
    name: "Josef",
    amount: 450500,
    sex: "M",
    is_married: true,
  },
];

export default class testExport extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Export data</h2>
        <ExcelFile element={<button>Download Data</button>}>
          <ExcelSheet data={dataSet1} name="Employees">
            <ExcelColumn label="Name" value="name" />
            <ExcelColumn label="Wallet Money" value="amount" />
            <ExcelColumn label="Gender" value="sex" />  
          </ExcelSheet>
        </ExcelFile>
      </div>
    );
  }
}
