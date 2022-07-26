import React, { useEffect, useState } from "react";
// import style from "../css/PopPost.module.css";
import newdate from "../image/news.png";
import firebase from "../config";
import DatePicker from "react-date-picker";
import { v4 as uuidv4 } from "uuid";
import { Link, Redirect } from "react-router-dom";
import ImagePopup from "../image/ImagePopup.jpg";
import {
  BackgroundPop,
  BoxBtn,
  BoxDate,
  BoxInput,
  BoxRight,
  Button,
  Container,
  ContainerForm,
  FormInputPop,
  HeaderPopup,
  ImageClose,
  ImageLeft,
  InputForm,
  LabelDate,
  LabelForm,
  SelectDate,
  TextAreaForm,
  TextHeader,
} from "./elements/PopupPostElement";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupPost = (props) => {
  const [date, setDate] = useState(new Date());
  const [post, setPost] = useState("");
  const [nameStd, setNameStd] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  // const [progress, setProgress] = useState(0);

  const dbRef = firebase.firestore().collection("Posts");


  function addPosts(newPost) {
    if (nameStd == "") {
      toast.error("กรุณากรอกหัวเรื่องให้หน่อยเถอะครับ !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dbRef
        //.doc() use if for some reason you want that firestore generates the id
        .doc(newPost.id)
        .set(newPost)
        .then(() => {
          // upload Image //
          setPosts((prev) => [newPost, ...prev]);
          alert("เพิ่มข่าวประชาสัมพันธ์เรียบร้อย");
          props.setTrigger(false);
          setLoading(true);
          window.location.reload();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return props.trigger ? (
    <>
      <BackgroundPop>
        <ImageClose onClick={() => props.setTrigger(false)}>&times;</ImageClose>
        <Container>
          <ImageLeft src={ImagePopup} />
          <BoxRight>
            <HeaderPopup>
              <TextHeader>ข่าวประชาสัมพันธ์</TextHeader>
            </HeaderPopup>
            <FormInputPop>
              <ContainerForm>
                <BoxInput>
                  <LabelForm>หัวข้อประชาสัมพันธ์</LabelForm>
                  <InputForm
                    type="text"
                    id="nameStd"
                    // placeholder="หัวข้อประชาสัมพันธ์"
                    value={nameStd}
                    onChange={(e) => setNameStd(e.target.value)}
                  ></InputForm>
                </BoxInput>
                <BoxDate>
                  <LabelDate>วันที่ประกาศ :</LabelDate>
                  <SelectDate
                    type="Date"
                    id="nameStd"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </BoxDate>
                <BoxInput>
                  <LabelForm>เนื้อหาข่าวประชาสัมพันธ์</LabelForm>
                  <TextAreaForm
                    type="text"
                    id="post"
                    // placeholder="เนื้อหาข่าวประชาสัมพันธ์ :"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  ></TextAreaForm>
                </BoxInput>
              </ContainerForm>
            </FormInputPop>
            <BoxBtn>
              <Button
                onClick={() =>
                  addPosts({ post, nameStd, date, url, id: uuidv4() })
                }
              >
                บันทึก
              </Button>
              <ToastContainer />
            </BoxBtn>
          </BoxRight>
        </Container>
      </BackgroundPop>
    </>
  ) : (
    ""
  );
};

export default PopupPost;
