import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  const [isRender, setIsRender] = useState();
  
  const handleToLoginButtonClick = () => {
    // TODO: 로그인 페이지로 라우팅(useNavigate)
    navigate('/login');
  }

  const handleLogoutButtonClick = () => {
    // TODO: 기존에 가지고 있던 로컬스토리지의 어세스토큰 제거
    localStorage.removeItem("accessToken");
    localStorage.removeItem("nickname");

    setIsRender((prev)=> !prev)
  }

  const isLoggedIn = localStorage.getItem("accessToken") ? true : false
  const userNickname = localStorage.getItem("nickname");

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {
        isLoggedIn === true ? (
        <div>
          <p>안녕하세요 {userNickname}님 반갑습니다.</p>
          <button onClick={handleLogoutButtonClick}>로그아웃</button>
        </div>) : (<button onClick={handleToLoginButtonClick}>로그인</button>)
      }      
      <Navigation />
    </div>
  );
};

export default Home;
