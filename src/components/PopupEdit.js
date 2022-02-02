import React, { useEffect, useState } from "react";
// import style from "../css/PopPost.module.css";
import newdate from "../image/news.png";
import firebase from "../config";
import DatePicker from "react-date-picker";
import { v4 as uuidv4 } from "uuid";
import { Link, Redirect } from "react-router-dom";
function PopupEdit(props) {
  const [date, setDate] = useState(new Date());
  const [post, setPost] = useState("");
  const [nameStd, setNameStd] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [posts, setPosts] = useState([]);
  const [score, setScore] = useState("");

  const dbRef = firebase.firestore().collection("Posts");



  function editPost(post) {
    setLoading();
    dbRef
      .doc(post.id)
      .update(post)
      .then(() => {
        setPosts((prev) =>
          prev.map((element) => {
            if (element.id !== post.id) {
              return element;
            }
            return post;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // const inputValueUpdate = () =>{
  //   const post = setPost;
  //   post[props] = val;
  // }

  return props.trigger ? (
    <>
    </>
    // <div className={style.bgPopup}>
    // {/* {posts.map((post)=>( */}
    //     <div className={style.container}>
    //     <img />
    //     <div className={style.text}>ข่าวประชาสัมพันธ์ </div>
        
    //         <form>
    //         <div className={style.formRow}>
    //           <div className={style.inputData}>
    //             {/* <div className={style.inputImage}>
    //                   <input type="file" />
    //                 </div> */}
    //             <textarea
    //               type="text"
    //               className={style.TextInput}
    //               id="post"
    //               placeholder="หัวข้อประชาสัมพันธ์ :"
    //               value={post.post}
    //               onChange={(e) => setPost(e.target.value)}
    //             />
    //             <label for="post" className={style.formLabel}>
    //               ประชาสัมพันธ์
    //             </label>
    //           </div>
    //           <div className={style.inputData}>
    //             <input
    //               type="text"
    //               className={style.formInput}
    //               id="nameStd"
    //               placeholder="ถึง :"
    //               value={post.nameStd}
    //               onChange={(e) => setNameStd(e.target.value)}
    //             />
    //             <label for="nameStd" className={style.formLabel}>
    //               ชื่อนักศึกษา
    //             </label>
    //             <div className={style.datebox}>
    //               <label className={style.textDate}>วัน / เดือน / ปี</label>
    //               <input
    //                 type="Date"
    //                 className={style.dateInput}
    //                 id="nameStd"
    //                 value={post.date}
    //                 onChange={(e) => setDate(e.target.value)}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     <div className={style.btnbox}>
    //       <button
    //         className={style.btnSubmit}
    //         onClick={() =>
    //           editPost({ post, nameStd, date, id: post.id })
    //         }
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
       
    //   </div>
    // {/* ))} */}
    //  {props.children}
    // </div>
  ) : (
    ""
  );
}
export default PopupEdit;
