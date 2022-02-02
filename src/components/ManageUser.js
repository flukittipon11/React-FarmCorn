import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../navigateBar/Navbar";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
// import style from "../css/ManageUser.module.css";
import newdate from "../image/news.png";
import man from "../image/man.png";
import firebaseConfig from "../config";
import PopUser from "./PopUser";
import std from '../image/teamwork.png'

const ManageUser = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email);
  const [users, setUsers] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const dbRef = firebaseConfig.firestore().collection("Users");

  function getPosts() {
    dbRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    });
  }
  useEffect(() => {
    getPosts();
  }, []);
  // console.log(currentUser.email);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {/* <div className={style.bg}>
        <div className={style.container}>
          <div className={style.header}>
            <h1 className={style.headH1}>จัดการข้อมูลนักศึกษา</h1>
          </div>
          <div className={style.boxid}>
            <img src={man} className={style.image} />
            <div className={style.boxUser}>
              <h3>ชื่อผู้ใช้ : Ittipon Sabaijit</h3>
              <p>E-mail : {currentUser.email}</p>
              <button
                className={style.btnAdd}
                onClick={() => setButtonPopup(true)}
              >
                เพิ่มข้อมูลนักศึกษา
              </button>
              <PopUser trigger={buttonPopup} setTrigger={setButtonPopup} />
            </div>
          </div>
          <div className={style.boxShowusr}>
            <div className={style.showUser}>
              {users.map((user) => (
                <div className={style.posttext}>
                <img src={std} className={style.imageStd} />
                  <div className={style.flexText}>
                    <h3>Username : {user.username} </h3>
                    <p>E-mail : {user.email} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default ManageUser;
