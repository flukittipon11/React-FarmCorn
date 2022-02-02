import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import logo from "../image/logoApp.png";
import {
  BoxInputLogin,
  ButtonLogin,
  ContainerLogin,
  FormLogin,
  HeaderApp,
  HeaderText,
  ImageLogo,
  InputLogin,
  MainBG,
  NameApp,
} from "./elements/LoginElements";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email);
  return (
    <>
      <MainBG>
        <ContainerLogin>
          <HeaderApp>
            <ImageLogo src={logo} />
            <NameApp>Application Farm Corn</NameApp>
          </HeaderApp>
          <div style={{textAlign:'center'}}>
            {currentUser ? (
              <p>
                คุณกำลังล็อคอินอยู่  <Link to="/dashboard">กลับสู่หน้าหลัก</Link>
              </p>
            ) : (
              <p>
                กรุณาเข้าสู่ระบบ  <Link to="/login">เข้าสู่ระบบ</Link>
              </p>
            )}
          </div>
        </ContainerLogin>
      </MainBG>
    </>
  );
};
export default Home;
