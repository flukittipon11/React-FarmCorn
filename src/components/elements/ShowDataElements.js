import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const CornTainerShow = styled.div`
  /* background-color: #dfeeea; */

  padding: 3rem 2rem;
  @media screen and (max-width: 768px) {
    height: 700px;
    padding: 3rem 2.5rem;
  }
`;

export const MainShowScreen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;
export const HeaderShow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  text-align: center;
  h2 {
    font-weight: 400;
    color: #1eae98;
  }
  p {
    color: #9d9d9d;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
`;
export const HeaderTextShow = styled.div`
  padding-left: 1rem;
  margin-bottom: 1rem;
  h3 {
    font-size: 22px;
    font-weight: 400;
    color: #fff;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    color: #fff1af;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    h3 {
      font-size: 20px;
      font-weight: 400;
    }
    p {
      font-size: 16px;
      font-weight: 400;
      color: #fff1af;
    }
  }
`;

export const BoxDataShow = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ShowDataPlot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 80%;
  height: 55vh;
  border-radius: 20px;
  background-color: #66806a;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    padding: 1.5rem 0;
  }
`;

export const BoxCard = styled.div`
  width: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  column-gap: 1rem;
  row-gap: 15px;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: auto;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 2.5rem;
  }
`;
export const CardData = styled(LinkR)`
  text-decoration: none;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 13.5rem;
  height: 5.5rem;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  :hover {
    background-color: #c1deae;
    p {
      color: #fff;
    }
    img {
      animation: roll 3s 3;
      transform: rotate(30deg);
      @keyframes roll {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 11rem;
    height: 5rem;
  }
  /* margin-right: 1rem; */
`;
export const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-right: 10px;
  :hover {
    animation: roll 3s infinite;
    transform: rotate(30deg);
    @keyframes roll {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
export const TextCard = styled.div`
  width: 70%;
  text-align: left;
`;
export const TextPlot = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
export const TextPlace = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: gray;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 300;
  }
`;
export const TextVarietie = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: gray;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    font-weight: 300;
  }
`;

export const Image = styled.img`
  width: 40;
  height: 40;
`;

export const ShowDataAnalyze = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  /* background-color: #fff; */
  @media screen and (max-width: 768px) {

    height: 60%;
    width: 100%;
  }
`;
export const BoxImageAnalyze = styled.div`
  display: flex;
  justify-content: center;
`;
export const ImageAnalyze = styled.img`
  width: 315px;
  height: 250px;
  @media screen and (max-width: 768px) {
    width: 285px;
    height: 215px;
  }
`;
export const BoxTextAnalyze = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1.5rem;
`;
export const TextAnalyzeHeader = styled.h2`
  font-weight: 400;
  color: #515e63;
`;
export const TextAnalyzeTitle = styled.p`
  font-weight: 400;
  color: #5e454b;
`;
export const btnBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled(LinkR)`
  width: 50%;
  border-radius: 50px;
  background-color: #548cff;
  white-space: nowrap;
  padding: 1rem;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #7fdbda;
    color: #2d6187;
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
