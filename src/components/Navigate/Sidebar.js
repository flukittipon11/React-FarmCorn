import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
  HomeIcon,
  ReccomendIcon,
  WeatherIcon,
  ShowIcon,
  BoxLogOut,
  BtnLogOut,
  ImageLogout,
} from "./SidebarElements";
import firebase from "../../config";
import logout from "../../image/logout.png";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/dashboard" onClick={toggle}>
            <HomeIcon />
            หน้าหลัก
          </SidebarLink>
          <SidebarLink to="/recommend" onClick={toggle}>
            <ReccomendIcon />
            แนะนำการปลูก
          </SidebarLink>
          <SidebarLink to="/weather" onClick={toggle}>
            <WeatherIcon />
            พยากรณ์อากาศ
          </SidebarLink>
          <SidebarLink to="/showScreen" onClick={toggle}>
            <ShowIcon />
            แสดงข้อมูล
          </SidebarLink>
          <BoxLogOut>
            <BtnLogOut
              onClick={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    alert("ออกจากระบบเรียบร้อย");
                  })
              }
            >
              <ImageLogout src={logout} />
              ออกจากระบบ
            </BtnLogOut>
          </BoxLogOut>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
