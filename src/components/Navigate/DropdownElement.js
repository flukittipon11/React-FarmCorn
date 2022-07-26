import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const DropdownMenu = styled.ul`
  background: red;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
`;
export const DropdownMenuli = styled.li`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  :hover {
    background: #91C788;
  }
`;
export const DropdownMenuClicked = styled.ul`
  display: none;
`;
export const NavLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #56776C;
  padding: 16px;
  :hover{
    color: #fff;
  }
`;
