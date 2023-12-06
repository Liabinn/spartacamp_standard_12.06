import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  }
  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleNickNameChange = (e) => {
    setNickname(e.target.value);
  }

  const handleToSignUpButtonClick = () => {
    navigate('/login')
  };

  const handleSubmitButtonClick = async (e) => {
    e.preventDefault();

    try {
    // TODO: state인 id와 nickName, password를 가져와서 회원가입 시도
        const response = await axios.post("https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          nickname,
          password
        });
        console.log(response)
    } catch (error) {
      const errorMessage = error.response.data.message
      alert(errorMessage)
    }
    
    // TODO: 회원가입이 완료되면, 토큰을 로컬호스트에 저장(토큰없으면 오류)

    // TODO: 회원가입 성공에 대한 안내메시지
    alert("회원가입 성공! 로그인 페이지로 이동합니다.")
    navigate('/login')
    // TODO: 메인페이지로 이동
  };

  return (
    <div>
      <header>
        <h1>회원가입 페이지 입니다.</h1>
        <p>회원가입을 위해서 아이디와 닉네임, 패스워드를 입력해주세요.</p>
      </header>
      <main>
        <form onSubmit={handleSubmitButtonClick}>
          <section>
          <label htmlFor='id'>id</label>
          <input type='string' value={id} onChange={handleIdChange} id='id' />
          </section>
          <section>
          <label htmlFor='Nickname'>Nickname</label>
          <input type='string' value={nickname} onChange={handleNickNameChange} id='Nickname' />
          </section>
          <section>
          <label htmlFor='password'>password</label>
          <input type='password' value={password} onChange={handlepasswordChange} id='password' />
          </section>
          <button type='submit'>회원가입</button>
          <button type='button' onClick={handleToSignUpButtonClick}>로그인으로</button>
        </form>
      </main>
    </div>
  )
}

export default SignUp;