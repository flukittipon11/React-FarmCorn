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
} from "../elements/RecommentElements";
import RecommentCorn from "../../image/RecommentCorn.jpg";

export default function RecommentScreen() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <RecomContainer id='recommend' >
        <RecomWrapper>
          <TextGuide>
            <BoxImage>
              <ImageCorn src={RecommentCorn} />
            </BoxImage>
            <TextWrapper>
              <Header>แนะนำการปลูกข้าวโพด</Header>
              <Title>
                ข้าวโพดเป็นธัญพืชเต็มเมล็ด
                ซึ่งชนิดที่คนส่วนใหญ่นิยมนำมารับประทาน คือ ข้าวโพดหวาน
                ข้าวโพดคั่ว และข้าวโพดข้าวเหนียวหรือข้าวสาลี
                โดยนำมาต้มสุกรับประทาน ใช้ประกอบอาหารหรือทำขนมหวาน
                แต่นอกจากรสชาติหวานอร่อยแล้ว
                ข้าวโพดยังประกอบไปด้วยสารอาหารที่จำเป็นต่อร่างกาย
              </Title>
              <BtnBox>
                <Button to="/recommend" onMouseEnter={onHover} onMouseLeave={onHover}>
                  แนะนำการปลูก
                  {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
              </BtnBox>
            </TextWrapper>
          </TextGuide>
        </RecomWrapper>
      </RecomContainer>
    </>
  );
}
