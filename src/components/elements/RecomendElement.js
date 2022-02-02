import styled from "styled-components";

export const RecommendContainer = styled.div`
  background-color: #fff;

  @media screen and (max-width: 768px) {
      height: 1000vh;
  }
`;
export const MainRecommed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 2rem 3rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;
export const RecommendBoxContent = styled.div`
  width: 100%;
  height: 50vh;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 72vh;
  }
`;
export const RecommendConntentOne = styled.div`
  width: 50%;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 2 5rem;
  }
`;
export const RecOneContent = styled.h2`
  font-size: 35px;
  font-weight: 400;
`;
export const Rectitle = styled.p`
  color: #f9975d;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const HeaderContentP = styled.p`
  color: gray;
  font-size: 18px;
  font-weight: 300;
`;
export const RecommendConntentTwo = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImageHeaderRec = styled.img`
  width: 450px;
  height: 100%;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;
export const RecContentThreeBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const RecContentBox = styled.div`
  background-color: #5e454b;
  display: flex;
  align-items: center;
  width: 32%;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  @media screen and (max-width: 768px) {
    width: 330px;
    height: 240px;
    margin-bottom: 10px;
  }
`;
export const RecContentBoxThree = styled.div`
  background-color: #5e454b;
  display: flex;
  align-items: center;
  width: 32%;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const RecContentP = styled.p`
  color: #f3f0d7;
  font-size: 15px;
  font-weight: 400;
`;
