import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const RecomContainer = styled.div`
  background-color: #b2d3be;

  @media screen and (max-width: 768px) {
    padding: 2rem 3rem;
    height: 700px;
  }
`;
export const RecomWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 2rem 20px;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;
export const BoxImage = styled.div`
  width: 50%;
  display: flex;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ImageCorn = styled.img`
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  width: 100%;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const TextGuide = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TextWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Header = styled.h1`
  font-size: 45px;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #01676b;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: #10316b;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    /* margin-bottom: 2rem; */
  }
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled(LinkR)`
  width: 35%;
  border-radius: 50px;
  background-color: #ffbf86;
  white-space: nowrap;
  padding: 1rem;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff47d;
    color: #146356;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
