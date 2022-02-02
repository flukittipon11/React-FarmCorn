import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import logo from "../image/news.png";
import PopupPost from "./PopupPost";
import {
  BoxbtnPost,
  BoxContainer,
  BoxDelete,
  BoxMessageShow,
  BoxPostShow,
  ButtonDelete,
  ButtonPost,
  ContainerDiv,
  HeaderDiv,
  HeaderMessage,
  MainMessage,
  PostHeader,
  PostTitle,
  TextPost,
} from "./elements/HomeElements";
import RecommentScreen from './page/RecommentScreen';
import MainPostScreen from './page/MainPostSreen';
import WeatherScreen from './page/WeatherScreen';

// import Navbar from "../navigateBar/Navbar";
import Navbar from "./Navigate/Navbar";
import Sidebar from "./Navigate/Sidebar";
import ShowDataScreen from "./page/ShowDataScreen";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [addCurentUser, setAddCurrentUser] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonEdit, setEditPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // const [image, setImage] = useState(null);
  // const [url, setUrl] = useState("");
  // const [progress, setProgress] = useState(0);

  const dbRef = firebaseConfig.firestore().collection("Posts");

  function getPosts() {
    setLoading(true);
    firebaseConfig
      .firestore()
      .collection("Posts")
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setPosts(items);
        setLoading(false);
      });
  }
  function getUrl() {
    setLoading(true);
    firebaseConfig
      .storage()
      .ref("images")
      .child("images/")
      .getDownloadURL()
      .then((url) => {
        setUrl(url);
      });
  }
  useEffect(() => {
    getPosts();
    getUrl();
    // eslint-disable-next-line
  }, []);

  //DELETE FUNCTION
  function deletePost(post) {
    firebaseConfig
      .firestore()
      .collection("Posts")
      .doc(post.id)
      .delete()
      .then(() => {
        setPosts((prev) => prev.filter((element) => element.id !== post.id));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  if (currentUser.email != "admin@gmail.com") {
    return <Redirect to="/homepage" />;
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainPostScreen />
      <RecommentScreen />
      <WeatherScreen />
      {/* <div className={style.main}>
        <div className={style.header}>
          <h2 style={{ fontWeight: "bold", color: "#5F7A61" }}>
            เว็ปไซต์บันทึกข้อมูล และ วิเคราะห์การเจริญเติบโตของข้าวโพด
          </h2>
          <p style={{ color: "#9D9D9D" }}>
            A website for recording and analyzing corn growth
          </p>
        </div>
        <div className={style.container}>
          <div className={style.container_Left}>
            <h2
              style={{
                fontWeight: "bold",
                color: "#155E63",
                // marginLeft: "1.5em",
                marginBottom: "0.5em",
              }}
            >
              ข่าวประชาสัมพันธ์
            </h2>
            <div className={style.box_messageLeft}>
              <div className={style.message}>
                <animateScroll
                  speed={0.8}
                  className="area"
                  contentClassName="content"
                  horizontal={false}
                >
                  {loading ? <h1>Loading...</h1> : null}
                  {posts.map((post) => (
                    <div className={style.posttext} key={post.id}>
                      <h3 className={style.h3post}>เรื่อง : {post.nameStd} </h3>
                      <p className={style.pName}>
                        เนื้อหาข่าวประชาสัมพันธ์ : {post.post}
                      </p>
                      <p className={style.ppost}>
                        ประชาสัมพันธ์เมื่อ : {post.date}{" "}
                      </p>
                      <div className={style.btnEdit}>
                        <PopupEdit
                          trigger={buttonEdit}
                          setTrigger={setEditPopup}
                        />
                        <button
                          className={style.btnDashDelete}
                          onClick={() => deletePost(post)}
                        >
                          <span className={style.spanDelete}>ลบ</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </animateScroll>
              </div>
              <div className={style.btn_click}>
                <button
                  className={style.btn_box}
                  onClick={() => setButtonPopup(true)}
                >
                  <img src={newdate} className={style.imgNew} />
                  <p style={{ marginBottom: 0 }}>เพิ่มข่าวสาร</p>
                </button>
                <PopupPost trigger={buttonPopup} setTrigger={setButtonPopup} />
              </div>
            </div>
          </div>
          <div className={style.container_Right}>
            <div className={style.box_messageRight}>
              <div className={style.box_menu}>
                <div className={style.box_user}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "40%",
                      marginRight: 10,
                    }}
                  >
                    <img src={user} style={{ width: 100, height: 100 }} />
                  </div>
                  <div className={style.content_user}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p style={{ fontWeight: "bold" }}>
                        ชื่อผู้ใช้งาน : Ittipon Sabaijit
                      </p>
                      <p style={{ fontWeight: "bold" }}>
                        E-mail : {currentUser.email}
                      </p>
                    </div>

                    <div>
                      <Link to="/manageUser">
                        <button className={style.btn_user}>
                          จัดการข้อมูลนักศึกษา
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="/recomend">
                  <button className={style.menu1}>
                    <div className={style.Menu1_image}>
                      <img
                        src={recoment}
                        style={{ width: 60, height: 60, marginRight: 20 }}
                      />
                      <h3 style={{ fontWeight: "bold" }}>
                        แนะนำการปลูกข้าวโพด
                      </h3>
                    </div>
                  </button>
                </Link>

                <div className={style.box_rowMenu}>
                  <Link
                    to="/weather"
                    style={{ textDecoration: "none" }}
                    className={style.menu2}
                  >
                    <div className={style.Menu2_image}>
                      <img
                        src={wether}
                        style={{ width: 50, height: 50, marginBottom: 5 }}
                      />
                      <p style={{ fontWeight: "bold" }}>พยากรณ์อากาศ</p>
                    </div>
                  </Link>
                  <Link
                    to="/showScreen/showDataFarm"
                    style={{ textDecoration: "none" }}
                    className={style.menu3}
                  >
                    <div className={style.Menu2_image}>
                      <img
                        src={showfarm}
                        style={{ width: 50, height: 50, marginBottom: 5 }}
                      />
                      <p style={{ fontWeight: "bold" }}>แสดงข้อมูลการปลูก</p>
                    </div>
                  </Link>

                  <Link
                    to="/showScreen/calculate"
                    style={{ textDecoration: "none" }}
                    className={style.menu4}
                  >
                    <div className={style.Menu2_image}>
                      <img
                        src={dashboard}
                        style={{ width: 50, height: 50, marginBottom: 5 }}
                      />
                      <p style={{ fontWeight: "bold" }}>Dashboard</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
