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
import RecommentScreen from "./page/RecommentScreen";
import MainPostScreen from "./page/MainPostSreen";
import WeatherScreen from "./page/WeatherScreen";

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
    </>
  );
};

export default Dashboard;
