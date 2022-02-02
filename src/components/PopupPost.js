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

  // const handleChange = e => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  //------------------- function Upload Image //-------------------//
  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   const uploadTask = firebase
  //     .storage()
  //     .ref(`images/${image.name}`)
  //     .put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // const progress = Math.round(
  //       //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       // );
  //       // setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       firebase
  //         .storage()
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };

  // console.log("image: ", image);

  //------------------- function //-------------------//

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {},
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       firebase
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           // console.log(url);
  //           setUrl(url);
  //         });
  //     }
  //   );
  //   firebase.firestore()
  //     .collection("Posts")
  //     .add({
  //       post: post,
  //       nameStd: nameStd,
  //       date: date,
  //     })
  //     .then(() => {
  //       alert("เพิ่มข่าวประชาสัมพันธ์เรียบร้อย");
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoading(false);
  //     });

  //   setPost("");
  //   setNameStd("");
  //   setDate("");
  // };
  function addPosts(newPost) {
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
              <Button onClick={() => addPosts({ post, nameStd, date, url, id: uuidv4() })}>บันทึก</Button>
            </BoxBtn>
          </BoxRight>
        </Container>
      </BackgroundPop>
    </>
  ) : (
    // <div className={style.bgPopup}>
    //   <div className={style.container}>
    //     <img />
    //     <div className={style.text}>ข่าวประชาสัมพันธ์ </div>
    //     <form>
    //       <div className={style.FormText}>
    //         <div className={style.Formheader}>
    //           <label className={style.label}>หัวข้อประชาสัมพันธ์</label>
    //           <input
    // type="text"
    // className={style.formInput}
    // id="nameStd"
    // placeholder="หัวข้อประชาสัมพันธ์ :"
    // value={nameStd}
    // onChange={(e) => setNameStd(e.target.value)}
    //           />
    //         </div>
    //         <div className={style.Formheader}>
    //           <label className={style.label}>เนื้อหาข่าวประชาสัมพันธ์</label>
    //           <textarea
    //             type="text"
    //             className={style.textareaInput}
    //             id="post"
    //             placeholder="เนื้อหาข่าวประชาสัมพันธ์ :"
    //             value={post}
    //             onChange={(e) => setPost(e.target.value)}
    //           />
    //         </div>
    //       <div className={style.datebox}>
    //       <label className={style.label}>วันที่ประกาศ :</label>
    //             <input
    //               type="Date"
    //               className={style.dateInput}
    //               id="nameStd"
    //               value={date}
    //               onChange={(e) => setDate(e.target.value)}
    //             />
    //           </div>
    //       </div>
    //       {/* <div className={style.formRow}>
    //         <div className={style.inputData}>
    //         <label for="nameStd" className={style.formLabel}>
    //             หัวข้อประชาสัมพันธ์
    //           </label>

    //           <label for="post" className={style.formLabel}>
    //             ประชาสัมพันธ์
    //           </label>
    //           <textarea
    //             type="text"
    //             className={style.TextInput}
    //             id="post"
    //             placeholder="หัวข้อประชาสัมพันธ์ :"
    //             value={post}
    //             onChange={(e) => setPost(e.target.value)}
    //           />
    //         </div>
    //         <div className={style.inputData}>
    //         </div>
    //       </div> */}
    //     </form>
    //     <div className={style.btnbox}>
    //       <button
    //         className={style.btnSubmit}
    //         onClick={() => addPosts({ post, nameStd, date, url, id: uuidv4() })}
    //       >
    //         Save
    //       </button>
    //       <button
    //         className={style.btnclose}
    //         onClick={() => props.setTrigger(false)}
    //       >
    //         Close
    //       </button>
    //     </div>
    //     {props.children}
    //   </div>
    // </div>
    ""
  );
};

export default PopupPost;
