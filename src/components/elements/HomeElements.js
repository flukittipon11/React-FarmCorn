import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 100%;
  /* background: #000; */
  display: flex;
  justify-content: center;
  padding: 3rem;
  flex-direction: column;
`;
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1em;
  h2 {
    font-weight: 400;
    color: #5f7a61;
  }
  p {
    color: #9d9d9d;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1.5rem;
`;
export const MainMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;
`;
export const HeaderMessage = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const BoxMessageShow = styled.div`
height: 50vh;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 65%;
  
  padding: 2rem;
  background-color: #fff;

  overflow: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 45vh;
  }
`;
export const BoxTextPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media screen and (max-width: 390px){
    width: 100%;
  }
`;

export const BoxPostShow = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em 1em 0.5em 1em;
  border-bottom: solid 2px gray;
  @media screen and (max-width: 390px){
    padding: 0%;
  }
  
`;
 

export const PostHeader = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: #515e63;
`;
export const PostTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #57837b;
  @media screen and (max-width: 390px){
    font-size: 12px;
  }
`;
export const BoxDelete = styled.div`
  display: flex;
  width: 20%;
  align-items: center;

  justify-content: flex-end;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 390px){
    padding-left: 0%;
  }
`;
export const ButtonDelete = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #e9573d;
  border: none;
  color: #ffffff;
  text-align: center;
  font-weight: 300;
  font-size: 16px;
  padding: 5px;
  width: 6em;
  height: 50%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 5.5em;
    font-size: 14px;
  }
  @media screen and (max-width: 390px){
    width: 100%;
    height: 50%;
    font-size: 10px;
  }
`;
export const BoxbtnPost = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 15rem;
  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;
export const ButtonPost = styled.button`
  border-width: 0;
  border-radius: 50px;
  width: 10rem;
  height: 6vh;
  background-color: #22577a;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  color: #fff;
  cursor: pointer;

  :hover{
    background-color: #fff;
    color: #22577a;

  }

  :active {
    background-color: #fff;
    color: #22577a;
  }
`;
