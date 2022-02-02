// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { AuthContext } from "../Auth";
// import firebase from "../../config";
// // import style from "../../css/Dashboard.module.css";
// import logo from "../../image/news.png";
// import PopupPost from "../PopupPost";
// import man from "../../image/man.png";
// // import NavbarCustomer from "../../navigateBar/NavbarCustomer";
// import newdate from "../../image/news.png";
// import PopupEdit from "../PopupEdit";

// export default class HomePage extends Component {
//   constructor() {
//     super();
//     this.firestoreRef = firebase.firestore().collection("Posts");
//     this.state = {
//       isLoading: true,
//       userArr: [],
//       user: null,
//       buttonEdit:false,
//       EditPopup:false,
//       buttonPopup:false,
//       setButtonPopup:false,
//     };
//   }
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(
//         (user) => {
//           console.log(user);
//           this.setState({
//             user: user,
//             email:user.email
//           })
//         }
//       );
//     this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   getCollection = (querySnapShot) => {
//     const userArr = [];
//     querySnapShot.forEach((res) => {
//       const {
//           nameStd,
//           post,
//           date,
//       } = res.data();
//       userArr.push({
//         key: res.id,
//         res,
//         nameStd,
//         post,
//         date,
//       });
//     });
//     this.setState({
//       userArr,
//       isLoading: false,
//     });
//   };
// //    deletePost(post) {
// //     firebase
// //       .firestore()
// //       .collection("Posts")
// //       .doc(post.id)
// //       .delete()
// //       .then(() => {
// //         setPosts((prev) => prev.filter((element) => element.id !== post.id));
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   }
//   render() {
//     // console.log(this.state.email);
//     // if(!this.state.user){
//     //     return <Redirect to="/login" />
//     // }
//     //   if(!this.state.user){
//     //       return (<Redirect to="/login"/>);
//     //   }
//     // console.log(this.state.user.email);
//     return (
//       <>
//         <NavbarCustomer />
//         <div className={style.bg}>
//           <div className={style.container}>
//             <div className={style.header}>
//               <h1 classNamm={style.h1t}>ข่าวประชาสัมพันธ์</h1>
//             </div>
//             <div className={style.box}>
//               {/* {loading ? <h1>Loading...</h1> : null} */}
//               {this.state.userArr.map((post) => (
//                 <div className={style.posttext} key={post.id}>
//                   {/* <form className={style.inputImage}>
//                    <input type="file" onChange={handleChange} />
//                    <button onClick={handleUpload}>Upload</button>
//                  </form> */}
//                   <h3 className={style.h3post}>เรื่อง : {post.post} </h3>
//                   <p className={style.pName}>ถึง : {post.nameStd}</p>
//                   <p className={style.ppost}>
//                     ประชาสัมพันธ์เมื่อ : {post.date}{" "}
//                   </p>
//                   {/* <div className={style.btnEdit}>
//                     <button
//                       className={style.btnDash}
//                       onClick={() => this.state.EditPopup(true)}
//                     >
//                       <span className={style.span}>แก้ไข</span>
//                     </button>
//                     <PopupEdit trigger={this.state.buttonEdit}/>
//                     <button
//                       className={style.btnDashDelete}
//                       onClick={() => deletePost(post)}
//                     >
//                       <span className={style.spanDelete}>ลบ</span>
//                     </button>
//                   </div> */}
//                 </div>
//               ))}
//             </div>
//             {/* <div className={style.boxbtn}>
//               <button
//                 className={style.button}
//                 onClick={() => setButtonPopup(true)}
//               >
//                 <img src={newdate} className={style.imgNew} />
//                 เพิ่มข่าวสาร
//               </button>
//               <PopupPost trigger={this.state.buttonPopup} />
//             </div> */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// // const HomePage = () => {
// //   const { currentUser } = useContext(AuthContext);
// //   const [addCurentUser, setAddCurrentUser] = useState(null);
// //   const [buttonPopup, setButtonPopup] = useState(false);
// //   const [buttonEdit, setEditPopup] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [posts, setPosts] = useState([]);
// //   const [image, setImage] = useState(null);
// //   const [url, setUrl] = useState("");
// //   // const [image, setImage] = useState(null);
// //   // const [url, setUrl] = useState("");
// //   // const [progress, setProgress] = useState(0);

// //   const dbRef = firebaseConfig.firestore().collection("Posts");

// //   function getPosts() {
// //     setLoading(true);
// //     firebaseConfig
// //       .firestore()
// //       .collection("Posts")
// //       .get()
// //       .then((item) => {
// //         const items = item.docs.map((doc) => doc.data());
// //         setPosts(items);
// //         setLoading(false);
// //       });
// //   }
// //   function getUrl(){
// //     setLoading(true);
// //     firebaseConfig.storage().ref("images").child("images/").getDownloadURL().then((url) =>{
// //       setUrl(url);
// //     })
// //   }
// //   useEffect(() => {
// //     getPosts();
// //     getUrl();
// //     // eslint-disable-next-line
// //   }, []);

// //   //DELETE FUNCTION
// //   function deletePost(post) {
// //     firebaseConfig
// //       .firestore()
// //       .collection("Posts")
// //       .doc(post.id)
// //       .delete()
// //       .then(() => {
// //         setPosts((prev) => prev.filter((element) => element.id !== post.id));
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   }
// //   //------------------- function Upload Image //-------------------//
// //   // const handleChange = (e) => {
// //   //   if (e.target.files[0]) {
// //   //     setImage(e.target.files[0]);
// //   //   }
// //   // };

// //   // const handleUpload = () => {
// //   //   const uploadTask = firebaseConfig.storage()
// //   //     .ref(`images/${image.name}`)
// //   //     .put(image);
// //   //   uploadTask.on(
// //   //     "state_changed",
// //   //     (snapshot) => {
// //   //       // const progress = Math.round(
// //   //       //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
// //   //       // );
// //   //       // setProgress(progress);
// //   //     },
// //   //     (error) => {
// //   //       console.log(error);
// //   //     },
// //   //     () => {
// //   //       firebaseConfig.storage()
// //   //         .ref("images")
// //   //         .child(image.name)
// //   //         .getDownloadURL()
// //   //         .then((url) => {
// //   //           setUrl(url);
// //   //         });
// //   //     }
// //   //   );
// //   // };

// //   // console.log("image: ", image);

// //   //------------------- function //-------------------//

// //   // function getPosts() {
// //   //   dbRef.onSnapshot((querySnapshot) => {
// //   //     const items = [];
// //   //     querySnapshot.forEach((doc) => {
// //   //       const {
// //   //         nameStd,
// //   //         date,
// //   //         post
// //   //       } = doc.data();
// //   //       items.push({
// //   //         key:doc.id,
// //   //         nameStd,
// //   //         date,
// //   //         post
// //   //       })
// //   //     });
// //   //     setPosts(items);
// //   //   });
// //   // }
// //   // useEffect(() => {
// //   //   getPosts();
// //   // }, []);
// //   // function deletePost(items){
// //   //   dbRef.doc(items.id).delete().then(()=>{
// //   //     alert("ลบข้อมูลเรียบร้อยแล้ว");
// //   //   })
// //   //   .catch((err)=>{
// //   //     console.error(err)
// //   //   });
// //   // }

// //   if (!currentUser) {
// //     return <Redirect to="/login" />;
// //   }
// //   console.log(currentUser.email);
// //   return (
// //     <>
// //       <NavbarC />
// //       <div className={style.bg}>
// //         <div className={style.container}>
// //           <div className={style.header}>
// //             <h1 classNamm={style.h1t}>ข่าวประชาสัมพันธ์</h1>
// //           </div>
// //           <div className={style.box}>
// //             {loading ? <h1>Loading...</h1> : null}
// //             {posts.map((post) => (
// //               <div className={style.posttext} key={post.id}>
// //                 {/* <form className={style.inputImage}>
// //                   <input type="file" onChange={handleChange} />
// //                   <button onClick={handleUpload}>Upload</button>
// //                 </form> */}
// //                 <h3 className={style.h3post}>เรื่อง : {post.post} </h3>
// //                 <p className={style.pName}>ถึง : {post.nameStd}</p>
// //                 <p className={style.ppost}>ประชาสัมพันธ์เมื่อ : {post.date} </p>
// //                 <div className={style.btnEdit}>
// //                   <button
// //                     className={style.btnDash}
// //                     onClick={() => setEditPopup(true)}
// //                   >
// //                     <span className={style.span}>แก้ไข</span>
// //                   </button>
// //                   <PopupEdit trigger={buttonEdit} setTrigger={setEditPopup} />
// //                   <button
// //                     className={style.btnDashDelete}
// //                     onClick={() => deletePost(post)}
// //                   >
// //                     <span className={style.spanDelete}>ลบ</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <div className={style.boxbtn}>
// //             <button
// //               className={style.button}
// //               onClick={() => setButtonPopup(true)}
// //             >
// //               <img src={newdate} className={style.imgNew} />
// //               เพิ่มข่าวสาร
// //             </button>
// //             <PopupPost trigger={buttonPopup} setTrigger={setButtonPopup} />
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
