import styled from "styled-components";

export const BackgroundPop = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 12px;
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0%;
  top: 0%;
  z-index: 1;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const Container = styled.div`
  width: 750px;
  height: 500px;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
    top: 50px;
  }
`;
export const ImageClose = styled.button`
  position: absolute;
  top: 130px;
  right: 320px;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border: none;
  display: grid;
  text-align: center;
  font-size: 2rem;
  color: #2e4052;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.164);
  cursor: $cursor;
  :hover {
      background-color: red;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    top: 130px;
    right: 35px;
  }
`;
export const HeaderPopup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const TextHeader = styled.h3`
  font-size: 26px;
  font-weight: 400;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    font-weight: 300;
  }
`;
export const FormInputPop = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
export const ImageLeft = styled.img`
  width: 300px;
  height: 430px;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 0 2rem;
`;
export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  /* background-color: #000; */
`;
export const BoxInput = styled.div`
  display: flex;
  margin: 10px auto;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const LabelForm = styled.label`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const InputForm = styled.input`
  color: #333;
  font-size: 16px;
  padding: 10px;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 100%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  border: solid rgb(163, 163, 163) 1px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 300;
  }
`;
export const BoxDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const TextAreaForm = styled.textarea`
  color: #333;
  font-size: 14px;
  font-weight: 300;
  padding: 10px;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 100%;
  height: 7rem;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
  border: solid rgb(163, 163, 163) 1px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
  }
`;
export const LabelDate = styled.label`
  font-size: 18px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 300;
  }
`;
export const SelectDate = styled.input`
  padding: 5px;
  font-weight: 300;
  font-size: 14px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 300;
  }
`;
export const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  font-size: 14px;
  background-color: #22577a;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #fff;
  padding: 9px;
  width: 90%;
  border: none;
  :hover {
    background-color: #fff;
    color: #22577a;
  }
`;
