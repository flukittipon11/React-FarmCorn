import styled from "styled-components";

export const MainBG = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  overflow: hidden;
  font-family: poppins;
`;
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;
export const HeaderApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;
export const ImageLogo = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
`;
export const NameApp = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #1da1f2;
`;
export const FormLogin = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const BoxInputLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const HeaderText = styled.div`
  display: block;
  justify-content: flex-start;
  margin-bottom: 5px;
`;
export const InputLogin = styled.input`
  padding: 1rem;
  background: #ecf0f3;
  width: 100%;
  border: none;
  height: 45px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #e2e2e2, inset -6px -6px 6px white;
`;
export const ButtonLogin = styled.button`
  color: white;
  margin-top: 30px;
  background: #38a3a5;
  width: 70%;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 400;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
  border: none;
  :hover {
    box-shadow: none;
    background-color: #22577a;
  }
`;
