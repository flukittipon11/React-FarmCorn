import styled from "styled-components";

export const ContainerAnalyze = styled.div`
  /* background-color: #fff; */
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
  /* padding: 2rem; */
`;
export const BackgroundHeader = styled.div`
  position: absolute;
  width: 100%;
  height: 35%;
  background-color: #7eb5b2;
  border-bottom-left-radius: 135px;
  padding: 2rem;
  z-index: -1;
`;
export const HeaderAnalyze = styled.div`
  padding: 2.5rem 5rem;
  h2 {
    font-weight: 400;
    font-size: 35px;
    color: #ddffbf;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    color: #fff;
  }
`;
export const BoxContent = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContentTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0 2rem;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export const BoxFilterData = styled.div`
  width: 35%;
  margin-right: 10px;
  background-color: #fff;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  height: 30vh;
  border-radius: 20px;
  padding: 1rem 2rem;
  h2 {
    font-weight: 400;
  }
  p {
    color: gray;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20vh;
    margin-bottom: 20px;
  }
`;
export const BoxPlotTop = styled.div`
  width: 25%;
  height: 30vh;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 45%;
    height: 20vh;
  }
`;
export const PlotHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
  h2 {
    font-size: 18px;
    font-weight: 400;
  }
  text-align: center;
`;

export const ImagePlot = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const BoxVarietiesTop = styled.div`
  width: 25%;
  height: 30vh;
  border-radius: 20px;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media screen and (max-width: 768px) {
    width: 45%;
    height: 20vh;
  }
`;
export const ContentMidle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  margin-bottom: 15px;
`;
export const BoxAnalyzeMidle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 86%;
  border-radius: 20px;
  height: 42vh;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 35vh;
  }
`;
export const ContentMidleLeft = styled.div`
  width: 40%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  /* display: flex; */
`;
export const CircularProgress = styled.div`
  width: 150px;
  height: 150px;
`;
export const BoxAmountPlot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 300;
  }
  p {
    font-size: 18px;
    color: #f0a500;
  }
`;
export const ContentMidleRight = styled.div`
  padding: 1rem;
  /* background-color: red; */
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const BoxBarsChart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderBoxMidle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
  h2 {
    font-size: 18px;
    font-weight: 400;
  }
  text-align: center;
`;
export const ContentBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0 2rem;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BoxbtmLeft = styled.div`
  width: 42%;
  height: 52vh;
  border-radius: 20px;
  background-color: #fff;
  margin-right: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const BoxbtmRight = styled.div`
  width: 42%;
  height: 52vh;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40vh;
    margin-bottom: 20px;
  }
`;
export const BoxDoungnet = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BoxBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TotalCorn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h2 {
    color: #65c18c;
    font-weight: 400;
    font-size: 85px;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 58px;
      font-weight: 400;
    }
  }
`;
export const SubmitVarieties = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  h2 {
    color: gray;
    font-weight: 400;
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 40px;
      font-weight: 400;
    }
  }
`;
