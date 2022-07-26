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
  IconDropdown,
} from "./NavbarElements";
import { AuthContext } from "../Auth";
import logoApp from "../../image/logoApp.png";
import logout from "../../image/logout.png";
import firebase from "../../config";
import Dropdown from "./Dropdown";

const options = ["Mangoes", "Apples", "Oranges"];

export default function Navbar({ toggle }) {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const [dropdown, setDropdown] = useState(false);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
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
          <li
            style={{ display: "flex", alignItems: "center", height: "80px" }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
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
              <IconDropdown />
            </NavLink>
            {dropdown && <Dropdown />}
          </li>

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
