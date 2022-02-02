import React, { useState, useContext } from "react";
import {
  Nav,
  NavMenu,
  Bars,
  NavLinks,
  NavLink,
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  LogOutButton,
  ImageLogOut,
  logoutText,
} from "./NavbarElements";
import { AuthContext } from "../Auth";
import logoApp from "../../image/logoApp.png";
import logout from "../../image/logout.png";
import firebase from "../../config";

const options = ["Mangoes", "Apples", "Oranges"];

export default function Navbar({ toggle }) {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      <Nav>
        <NavLink
          to="/dashboard"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={500}
          delay={100}
          activeStyle
        >
          <img src={logoApp} alt="logo" style={{ width: 50, height: 50 }} />
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink
            to="/dashboard"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            delay={100}
            activeStyle
          >
            หน้าหลัก
          </NavLink>
          <NavLink
            to="/recommend"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            delay={100}
            activeStyle
          >
            แนะนำการปลูก
          </NavLink>
          <NavLink
            to="/weather"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            delay={100}
            activeStyle
          >
            พยากรณ์อากาศ
          </NavLink>
          <NavLink
            to="/showScreen"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
            delay={100}
            activeStyle
          >
            แสดงข้อมูล
          </NavLink>
          <LogOutButton
            onClick={() =>
              firebase
                .auth()
                .signOut()
                .then(() => {
                  alert("ออกจากระบบเรียบร้อย");
                })
            }
          >
            <logoutText>ออกจากระบบ</logoutText>
            <ImageLogOut src={logout} />
          </LogOutButton>
        </NavMenu>
      </Nav>
    </>
  );
}
