import React, { useState } from "react";
import {
  Header,
  ImageCorn,
  RecomContainer,
  RecomWrapper,
  TextGuide,
  TextWrapper,
  Title,
  BoxImage,
  BtnBox,
  Button,
  ArrowForward,
  ArrowRight,
} from "../elements/WeatherElements";
import WeatherCorn from "../../image/WeatherCorn.jpg";

export default function WeatherScreen() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  
  return (
    <>
      <RecomContainer id='weather' >
        <RecomWrapper>
          <TextGuide>
            <TextWrapper>
              <Header>พยากรณ์อากาศ</Header>
              <Title>
                ปัจจัยด้านสภาพแวดล้อมโดยเฉพาะภูมิอากาศมีบทบาทสำคัญต่อการพัฒนาของโรคพืช การระบาดของโรคผันแปรตามสภาพแวดล้อม
                ความเข้าใจปัจจัยที่เกี่ยวข้องกับการระบาดของโรคมี
                ประโยชน์เพื่อหาแนวทางในการลดผลกระทบของโรคพืชต่อการผลิตข้าวโพดเลี้ยงสัตว และสภาพอากาศยังเป็นสิ่งที่ช่วยในการตัดสินใจในการเริ่มต้นปลูกเพื่อรับผลผลิตที่ดี
              </Title>
              <BtnBox>
                <Button to="/weather" onMouseEnter={onHover} onMouseLeave={onHover}>
                  พยากรณ์อากาศ
                  {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </BtnBox>
            </TextWrapper>
            <BoxImage>
              <ImageCorn src={WeatherCorn} />
            </BoxImage>
          </TextGuide>
        </RecomWrapper>
      </RecomContainer>
    </>
  );
}
