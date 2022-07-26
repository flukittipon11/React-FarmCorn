import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import {
  BoxbtnPost,
  BoxContainer,
  BoxDelete,
  BoxMessageShow,
  BoxPostShow,
  BoxTextPost,
  ButtonDelete,
  ButtonPost,
  ContainerDiv,
  HeaderDiv,
  HeaderMessage,
  MainMessage,
  PostHeader,
  PostTitle,
  TextPost,
} from "../elements/HomeElements";
import firebase from "../../config";
import { AuthContext } from "../Auth";
import PopupPost from "../PopupPost";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPostSreen = () => {
  const { currentUser } = useContext(AuthContext);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonEdit, setEditPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [statusPost, setstatusPost] = useState("");

  const dbRef = firebase.firestore().collection("Posts");

  function getPost() {
    setLoading(true);
    dbRef.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setPosts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getPost();
  }, []);

  function deletePost(post) {
    dbRef
      .doc(post.id)
      .delete()
      .then(() => {
        setPosts((prev) => prev.filter((element) => element.id !== post.id));
        toast.success("ลบข่าวประชาสัมพันธ์เรียบร้อย", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const returnTableData = () => {
    if (posts.length == 0)
      return (
        <p
          style={{
            fontSize: "22px",
            color: "gray",
            fontWeight: "400",
            opacity: "0.9",
          }}
        >
          ไม่มีข่าวประชาสัมพันธ์
        </p>
      );
    else {
      return posts.map((post) => {
        return (
          <BoxPostShow>
            <BoxTextPost>
              <PostHeader>เรื่อง : {post.nameStd}</PostHeader>
              <PostTitle>เนื้อหาข่าวประชาสัมพันธ์ : {post.post}</PostTitle>
              <PostTitle>ประชาสัมพันธ์เมื่อ : {post.date}</PostTitle>
            </BoxTextPost>
            <BoxDelete>
              <ButtonDelete onClick={() => deletePost(post)}>ลบ</ButtonDelete>
            </BoxDelete>
            <ToastContainer />
          </BoxPostShow>
        );
      });
    }
  };

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  console.log(posts);
  return (
    <>
      <ContainerDiv id="mainSreen">
        <HeaderDiv>
          <h2>เว็ปไซต์บันทึกข้อมูล และ วิเคราะห์การเจริญเติบโตของข้าวโพด</h2>
          <p>A website for recording and analyzing corn growth</p>
        </HeaderDiv>
        <BoxContainer>
          <MainMessage>
            <HeaderMessage>
              <h2
                style={{
                  fontWeight: "400",
                  color: "#155E63",
                  // marginLeft: "1.5em",
                  marginBottom: "1rem",
                }}
              >
                ข่าวประชาสัมพันธ์
              </h2>
            </HeaderMessage>
            <BoxMessageShow>
              {loading ? <p>Loading...</p> : null}
              {/* {console.log(posts.length)} */}
              {returnTableData()}
            </BoxMessageShow>
          </MainMessage>
          <BoxbtnPost>
            <ButtonPost onClick={() => setButtonPopup(true)}>Post</ButtonPost>
            <PopupPost trigger={buttonPopup} setTrigger={setButtonPopup} />
          </BoxbtnPost>
        </BoxContainer>
      </ContainerDiv>
    </>
  );
};
export default MainPostSreen;
