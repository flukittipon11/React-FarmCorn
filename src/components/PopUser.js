// import React, { useEffect, useState } from "react";
// // import style from "../css/PopUser.module.css";
// import newdate from "../image/news.png";
// import firebase from "../config";
// import DatePicker from "react-date-picker";

// function PopUser(props) {
//   const [branch, setbranch] = useState("");
//   const [email, setEmail] = useState("");
//   const [stdnumber,setStdnumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     firebase
//       .firestore()
//       .collection("Users")
//       .add({
//         email: email,
//         username: username,
//         branch: branch,
//         password:password,
//         stdnumber:stdnumber
//       })
//       .then(() => {
//         firebase.createUserWithEmailAndPassword(email,password);
//         alert("เพิ่มข้อมูลนักศึกษาเรียบร้อย");
//         setLoading(false);
//       })
//       .catch((error) => {
//         alert(error.message);
//         setLoading(false);
//       });

//     setEmail("");
//     setUsername("");
//     setbranch("");
//     setPassword("");
//     setStdnumber("");
//   };

//   return props.trigger ? (
//     <div className={style.bgPopup}>
//       <div className={style.container}>
//         <img />
//         <div className={style.text}>เพิ่มข้อมูลนักศึกษา </div>
//         <form>
//           <div className={style.formRow}>
//             <div className={style.inputData}>
//               <input
//                 type="text"
//                 className={style.formInput}
//                 id="username"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <label for="username" className={style.formLabel}>
//                 Username
//               </label>
//             </div>

//             <div className={style.inputData}>
//               <input
//                 type="text"
//                 className={style.formInput}
//                 id="email"
//                 placeholder="E-mail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <label for="email" className={style.formLabel}>
//                 E-mail
//               </label>
//             </div>
//             <div className={style.box2colum}>
//               <div className={style.inputData2}>
//                 <input
//                   type="password"
//                   className={style.formInput2}
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label for="password" className={style.formLabel2}>
//                   Password
//                 </label>
//               </div>
//               <div className={style.inputData}>
//                 <input
//                   type="text"
//                   className={style.formInput3}
//                   id="stdNo"
//                   placeholder="รหัสนักศึกษา"
//                   value={stdnumber}
//                   onChange={(e) => setStdnumber(e.target.value)}
//                 />
//                 <label for="stdNo" className={style.formLabel3}>
//                   รหัสนักศึกษา
//                 </label>
//               </div>
//               <div className={style.inputData}>
//                 <input
//                   type="text"
//                   className={style.formInput4}
//                   id="branch"
//                   placeholder="สาขาของนักศึกษา"
//                   value={branch}
//                   onChange={(e) => setbranch(e.target.value)}
//                 />
//                 <label for="branch" className={style.formLabel4}>
//                   สาขา
//                 </label>
//               </div>
//             </div>
//           </div>
//         </form>
//         <div className={style.btnbox}>
//           <button className={style.btnSubmit} onClick={handleSubmit}>
//             เพิ่ม
//           </button>
//           <button
//             className={style.btnclose}
//             onClick={() => props.setTrigger(false)}
//           >
//             ยกเลิก
//           </button>
//         </div>
//         {props.children}
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// }

// export default PopUser;
