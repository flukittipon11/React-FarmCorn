import styled from "styled-components";

export const SizeBackground = styled.html`
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const ContainerCalculate = styled.div`
  background-color: #dfeeea;
  width: 100%;
  height: 100%;
  padding: 4.5rem 2rem;
  @media screen and (max-width: 768px) {
    height: 1600px;
    padding: 1rem 4rem;
  }
`;
export const MainCalculate = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
`;
export const HeaderCalculate = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  justify-content: flex-start;
  h2 {
    font-size: 42px;
    font-weight: 400;
    color: #1eae98;
  }
  p {
    font-size: 20px;
    color: #9d9d9d;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
  }
`;
export const BoxAnalyzeTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
export const BoxTopAnalyzeLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  /* background-color: #fff; */
`;
export const BoxTopAnalyzeRight = styled.div`
  display: flex;
  justify-content: center;
  width: 35%;
  height: 24rem;
  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
    height: 21rem;
  }
`;
export const PieBoxAnalyze = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
export const BoxTextChart = styled.text`
  font-size: 20px;
  font-weight: 400;
  color: #22577a;
`;
export const BoxDataChart = styled.div`
  width: 304px;
  height: 204px;
`;
export const BoxBottomDataChart = styled.div`
  width: 30em;
  height: 30em;
`;
export const BoxLeftContentOne = styled.div`
  padding-left: 0 2em;
  display: flex;
  background-color: #52734d;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  margin-bottom: 0.5em;
  width: 100%;
  height: 7em;
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
export const ContentOneHeader = styled.div`
  background-color: #fff;
  width: 20%;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const OneHeaderText = styled.p`
  font-size: 20px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 300;
  }
`;
export const OneTitleText = styled.p`
  @media screen and (max-width: 768px) {
    margin-top: -15px;
    font-size: 40px;
    font-weight: 400;
  }
`;
export const BoxLeftContentTwo = styled.div`
  padding: 0 2rem;
  display: flex;
  align-items: center;
  background-color: #91c788;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  margin-bottom: 0.5em;
  width: 100%;
  height: 7em;
  border-radius: 10px;
`;
export const BoxLeftContentThree = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;
export const BoxContentRowOne = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
  height: 9rem;
  padding: 20px;
  background-color: #ddffbc;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
export const RowHeaderTextOne = styled.h2`
  font-size: 22px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 400;
  }
`;
export const RowTitleTextOne = styled.p`
  font-size: 22px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 300;
  }
`;
export const BoxRowDataText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const RowDataTextOne = styled.h2`
  font-size: 35px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 45px;
    font-weight: 400;
  }
`;

export const BoxContentRowTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 23%;
  height: 9rem;
  padding: 10px;
  background-color: #ddffbc;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
export const RowHeaderTextTwo = styled.h2`
  font-size: 22px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    font-weight: 400;
  }
`;
export const RowDataTextTwo = styled.h2`
  font-size: 35px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 45px;
    font-weight: 400;
  }
`;
export const BoxContentRowThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 23%;
  height: 9rem;
  padding: 10px;
  background-color: #ddffbc;
  border-radius: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;
export const BoxAnalyzeBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  width: 100%;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BoxBottomAnalyzeLeft = styled.div`
  width: 52%;
  height: 19rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    height: 19rem;
  }
`;
export const BoxBottomAnalyzeRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 19rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 19rem;
  }
`;
