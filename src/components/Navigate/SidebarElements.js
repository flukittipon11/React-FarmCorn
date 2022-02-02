import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { NavLink as Link } from "react-router-dom";
import { FaTimes, FaBook, FaHome } from "react-icons/fa";
import { TiWeatherShower } from "react-icons/ti";
import { RiSlideshowFill } from "react-icons/ri";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #616161;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #f4f9f4;
`;

export const HomeIcon = styled(FaHome)`
  margin-right: 20px;
  color: #f4f9f4;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-right: 30px;
  }
`;
export const ReccomendIcon = styled(FaBook)`
  margin-right: 20px;
  color: #f4f9f4;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-right: 30px;
  }
`;
export const WeatherIcon = styled(TiWeatherShower)`
  margin-right: 20px;
  color: #f4f9f4;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-right: 30px;
  }
`;
export const ShowIcon = styled(RiSlideshowFill)`
  margin-right: 20px;
  color: #f4f9f4;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-right: 30px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  @media screen and (max-width: 768px) {
    height: 100%;
    /* align-items: center; */
    padding: 10rem;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  width: 50%;
  /* padding: 0 50px; */
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #f4f9f4;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const BoxLogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const BtnLogOut = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  font-size: 1.4rem;
  transition: 0.2s ease-in-out;
  background: none;
  width: 100%;
  color: #f4f9f4;
  cursor: pointer;
  :hover {
    color: #ff5959;
  }
`;
export const ImageLogout = styled.img`
  margin-right: 20px;
  width: 30px;
  height: 30px;
  :hover {
    transition: all 0.2s ease-in-out;
    margin-right: 30px;
  }
`;
