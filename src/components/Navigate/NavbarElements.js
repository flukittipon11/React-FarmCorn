import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem 1em 2em;
  z-index: 10;
  position: sticky;
  text-decoration: none;
  top: 0;
  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const NavLink = styled(Link)`
  color: #113a5d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.active {
    color: #74b49b;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #74b49b;
  }
`;
export const NavLinks = styled(LinkS)`
  color: #113a5d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #74b49b;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #5c8d89;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DropDownContainer = styled("div")`
  width: 10.5em;
`;

export const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

export const DropDownListContainer = styled("div")``;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const LogOutButton = styled.button`
  color: #113a5d;
  display: flex;
  align-items: center;
  border: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  &.active {
    color: red;
  }
  &:hover {
    justify-content: space-around;
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: red;
  }
`;
export const logoutText = styled.p`
  margin-right: 10px;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
  }
`;
export const ImageLogOut = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-left: 10px;
  }
`;
