import React from 'react'
import postsAxios from '../axios/posts'
import commentsAxios from '../axios/comments';

function TestPage() {

  const handleGetPostButtonClick = async () => {
    const response = await postsAxios.get();
    console.log(response.data);
  }

  const handleGetCommentsButtonClick = async () => {
    // ! 기본 로직
    // try {} catch (error) {}
    try {
      const {data} = await commentsAxios.get();
      console.log(data);
    } catch (error) {
      // alert(error.response.data.message)
      // console.log(error);
      alert('알 수 없는 문제가 발생했습니다. 고객센터로 문의해주세요.')
    }
  }

  return (
    <div>
      <h1>Test Page</h1>
      <p>API 테스트를 진행합니다.</p>
      <button onClick={handleGetPostButtonClick}>post 데이터 가져오기(로그인 불필요)</button>
      <button onClick={handleGetCommentsButtonClick}>comments 데이터 가져오기(로그인 필요)</button>
    </div>
  )
}

export default TestPage;