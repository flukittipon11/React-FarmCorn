import Raact, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
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

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  console.log(currentUser);
  return (
    <>
      <MainBG>
        <ContainerLogin>
          <HeaderApp>
            <ImageLogo src={logo} />
            <NameApp>Application Farm Corn</NameApp>
          </HeaderApp>
          <FormLogin onSubmit={handleSubmit}>
            <BoxInputLogin>
              <HeaderText>
                <label>อีเมล</label>
              </HeaderText>
              <InputLogin
                name="email"
                type="email"
                placeholder="example@test.com"
              />
            </BoxInputLogin>

            <HeaderText>
              <label>รหัสผ่าน</label>
            </HeaderText>
            <InputLogin
              name="password"
              type="password"
              placeholder="Min 6 charaters long"
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonLogin>เข้าสู่ระบบ</ButtonLogin>
            </div>
          </FormLogin>
        </ContainerLogin>
      </MainBG>
    </>
  );
};
export default Login;
