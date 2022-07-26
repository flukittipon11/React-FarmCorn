import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 100vh;
  @media screen and (max-width: 768px) {
    height: 100vh;
    padding: 0 0;
  }
`;
export const MainScreen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 3rem 20px;
  @media screen and (max-width: 768px) {
    padding: 2rem 20px;
  }
`;
export const BoxHeaderText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 768px) {
    /* font-size: 16px; */
    margin-bottom: 1rem;
  }
`;
export const TextHeader = styled.p`
  font-size: 26px;
  font-weight: 300;
  color: #464660;
  @media screen and (max-width: 768px) {
    /* font-size: 16px; */
  }
`;
export const BoxContent = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const BoxPlotName = styled.div`
  display: flex;
  width: 480px;
  height: 170px;
  margin-right: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  background-color: #ffffc7;
  @media screen and (max-width: 768px) {
    width: 450px;
    height: 170px;
    margin-bottom: 10px;
    margin-right: 0;
  }
`;
export const BoxImagePlot = styled.div`
  width: 60%;
  height: 100%;
`;
export const ImagePlot = styled.img`
  width: 100%;
  height: 100%;
`;
export const BoxTooltip = styled.div`
cursor: pointer;
  border-radius: 50px;
  position: absolute;
  right: 3rem;
  background-color: #ffff;
`;
export const IconTooltip = styled.img`
  width: 50px;
  height: 50px;
`;
export const ContentPlotname = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
`;
export const TextNamePlot = styled.h2`
  color: #2f86a6;
  font-size: 28px;
  font-weight: 400;
`;
export const TextTitlePlot = styled.p`
  color: gray;
  font-size: 14px;
`;
export const BoxSize = styled.div`
  width: 350px;
  height: 180px;
  border-radius: 20px;
  opacity: 0.95;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #5f7a61;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 170px;
    margin-bottom: 5px;
    margin-right: 10px;
  }
`;
export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const TextHeaderSize = styled.h2`
  color: #d3e4cd;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;
export const TextTitleSize = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 5px;
  }
`;
export const BoxHusk = styled.div`
  width: 350px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 20px;
  background-color: #444941;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 170px;
    margin-bottom: 5px;
    margin-right: 0;
  }
`;
export const HuckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 30px;
  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;
export const TextHeaderHusk = styled.h2`
  color: #d3e4cd;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;
export const TextTitleHusk = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const BoxTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 768px) {
    overflow: auto;
    padding: 30px;
  }
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media screen and (max-width: 768px) {
  }
`;
export const TableTR = styled.tr`
  background-color: #fff;
  text-align: center;
  padding: 10px;
  :hover {
    background-color: #ddd;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;
export const TableTH = styled.th`
  padding: 12px;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background-color: #04aa6d;
  color: white;
  border: solid rgb(14, 11, 11) 1px;
  @media screen and (max-width: 768px) {
    padding: 5px;
    font-size: 12px;
    font-weight: 200;
  }
`;
export const TableTD = styled.td`
  text-align: center;
  height: 2.5em;
  font-size: 14px;
  font-weight: 300;
  border: solid rgb(20, 19, 19) 1px;
  @media screen and (max-width: 768px) {
    height: 1.5em;
    font-size: 12px;
    font-weight: 200;
  }
`;
export const BoxBtnexport = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  width: 100%;
`;
export const ButtonExport = styled.button`
  background-color: #00917c;
  color: #fff;
  border: none;
  padding: 1em;
  width: 12em;
  font-size: 16px;
  font-weight: 300;
  border-radius: 100px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  :hover {
    transition: 0.5s;
    background-color: #70af85;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: #fff;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    width: 10em;
    padding: 1em;
    font-size: 14px;
  }
`;
// tooltip left
export const TooltipLeft = styled.div`
  flex-direction: column;
  position: absolute;
  right: 4rem;
  top: -13rem;
  /* left: auto;
  right: calc(100% + var(--tooltip-margin));
  top: 50%;
  transform: translateX(0) translateY(-50%);
  ::before {
    left: auto;
    right: calc(var(--tooltip-arrow-size) * -2);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: var(--tooltip-background-color); */
  /* } */
`;
