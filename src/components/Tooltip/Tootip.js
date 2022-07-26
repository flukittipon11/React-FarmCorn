import React, { useState, useEffect } from "react";
import { TooltipLeft } from "../elements/ShowGetDataElement";
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
  TextNamePlot,
  TextTitleHusk,
  TextTitlePlot,
  TextTitleSize,
} from "../elements/ShowGetDataElement";

export default function Tootip(props) {
  let timeout;
  const [active, setactive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setactive(true);
    }, props.delay || 600);
  };
  const hideTip = () => {
    clearInterval(timeout);
    setactive(false);
  };
  return (
    <div onMouseEnter={showTip} onMouseLeave={hideTip}>
      {/* Wrapping */}
      {props.children}
      {active && (
        <TooltipLeft>
          <BoxHusk>
            <HuckContainer>
              <TextHeaderHusk>Husk Cover Choice</TextHeaderHusk>
              <TextTitleHusk>1 = ปลายฝักโผล่พ้นเปลือกหุ้มฝัก</TextTitleHusk>
              <TextTitleHusk>2 = เปลือกหุ้มฝักปิดเสมอปลายฝัก</TextTitleHusk>
              <TextTitleHusk>
                3 = เปลือกหุ้มฝักปิดเกินปลายฝัก 1 ซม.
              </TextTitleHusk>
              <TextTitleHusk>
                4 = เปลือกหุ้มฝักปิดเกินปลายฝัก 2 ซม.
              </TextTitleHusk>
              <TextTitleHusk>
                5 = เปลือกหุ้มฝักปิดเกินปลายฝัก 1 ซม. ขึ้นไป
              </TextTitleHusk>
            </HuckContainer>
          </BoxHusk>
          <BoxSize>
            <SizeContainer>
              <TextHeaderSize>ขนาดฝักหลังปลอก ( เซนติเมตร )</TextHeaderSize>
              <TextTitleSize>
                L1 = ความยาวฝักวัดจากโคนฝักถึงปลายสุดของฝักที่ปอกเปลือกแล้ว
              </TextTitleSize>
              <TextTitleSize>L2 = ความยาวของส่วนที่ไม่ติดปลายฝัก</TextTitleSize>
              <TextTitleSize>D = ขนาดเส้นผ่านศูนย์กลางฝัก</TextTitleSize>
            </SizeContainer>
          </BoxSize>
        </TooltipLeft>
      )}
    </div>
  );
}
