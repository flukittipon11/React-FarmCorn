import styled from "styled-components";

export const WeatherContainer = styled.div`
  background: #9ad0ec no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  padding: 3rem 3.5rem;
  height: 180vh;

  @media screen and (max-width: 768px) {
    padding: 3rem 0;
  }
`;
export const MainWeather = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
  }
`;
export const HeaderWeather = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
  }
`;

export const ImageWeather = styled.img`
  width: 140px;
  height: 130px;
`;
export const TextHeader = styled.h3`
  font-size: 30px;
  font-weight: 400;
  color: #fff;
`;
export const TextTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: gray;
`;

export const BoxContentWeather = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const BoxContentTop = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    
  }
`;
export const BoxTopContentOne = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  height: 100%;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100%;
    margin-right: 0;
  }
`;
export const BoxTopContentTwo = styled.div`
  display: flex;
  width: 35%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const ContentTopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
`;
export const BoxTopRowHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;
export const TopRowImage = styled.img`
  width: 150px;
  height: 150px;
`;
export const TopRowText = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: #1a374d;
`;
export const BoxTopRowContent = styled.div`
  padding: 0 30px;
`;
export const RowContent = styled.h2`
  font-size: 18px;
  font-weight: 300;
  color: #1572a1;
`;
export const BoxContentBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55vh;
`;
export const BoxBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 91%;
  /* height: 50vh; */
  padding: 2rem 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

// ------------------
export const BoxWeatherLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 20px;
  width: 100%;
  height: 100vh;
`;
export const BoxGetWeather = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70%;
  padding-bottom: 1rem;
`;
export const BoxDataWeather = styled.div`
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  width: 70%;
  flex-direction: column;
  text-align: center;
`;
export const TextCityName = styled.h2`
  font-weight: 300;
  color: #1a374d;
  span {
    font-weight: 400;
  }
`;
export const BoxCitytemp = styled.div`
  font-size: 5rem;
  font-weight: 400;
  color: #1572a1;
  text-align: center;
`;
export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CityIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const BoxContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
`;
export const BoxContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
`;
export const BoxSearch = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1.5em;
  width: 100%;
  height: 30%;
`;
export const BoxHeaderLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LabelSearch = styled.label`
  font-size: 17px;
  font-weight: 300;
`;
export const BoxInputSearch = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BtnInputSearch = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
export const InputSearch = styled.input`
  background-color: #e3edf7;
  padding: 14px 25px;
  border: none;
  border-radius: 50px;
  display: block;
  font-weight: 300;
  color: #255994;
  -webkit-appearance: none;
  transition: all 240ms ease-out;
  width: 100%;
  ::placeholder {
    outline: none;
    color: #6d7f8f;
    background-color: lighten(#e3edf7, 3%);
  }
  :focus {
    outline: none;
    color: #255994;
    background-color: lighten(#e3edf7, 3%);
  }
`;
export const BoxImageSearch = styled.div`
  margin-right: 1em;
  background-color: #fff;
  display: flex;
  align-items: center;
`;
export const ImageSearch = styled.img`
  width: 35px;
  height: 35px;
`;

//
export const BoxWeatherRight = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 2rem;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const BoxContainerRight = styled.div`
  height: 100%;
  padding: 1rem 0;
`;
export const HeaderBoxRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const ImageIconLocation = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const TextHeaderRight = styled.h3`
  font-size: 18px;
  font-weight: 300;
`;
export const BoxCityComponent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    height: 100%;
    flex-direction: column;
  }
`;
