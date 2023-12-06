import axios from "axios";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3004/comments/",
});
// ! 코드를 짜기 전에 논리적 구조를 먼저 설계해본다.
// 모르는 부분만 구글링 해서 가져온다.
// TODO: (1) request 인터셉터, response 인터셉터 정의
// * 기본 구조 먼저 쓰고 시작하기
// commentsAxios.interceptors.request.use(
//   (config) => {
//     return config
//   }
// )
commentsAxios.interceptors.request.use(
  async (config) => {
    // TODO: (2) 로그인이 필요한 API 이기 때문에 토근이 존재하는지 먼저 확인
    const accessToken = localStorage.getItem("accessToken")

    if (!accessToken) {
      // TODO: (2-2) 존재하지 않는 경우(서버에 보낼 필요 없음) -> 오류 발생시키면 됨
      alert('토큰이 존재하지 않습니다.')
      return Promise.reject('토큰이 존재하지 않습니다.')
    }
    // TODO: (2-1) 존재하는 경우는 다음으로,

    // TODO: (3) 토큰 유효성 검증(to server)
    const {data} = await axios.get('https://moneyfulpublicpolicy.co.kr/user',{
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${accessToken}`,
      }
    });

    console.log(data);

    if (data.success === true) {
      return config;
    } else {
      alert('검증이 실패하였습니다.')
      return Promise.reject('검증이 실패하였습니다.')
    }

    // TODO: (3-1) 유효성 검증이 성공하면 계속 진행
    // TODO: (3-2) 유효성 검증이 실패하면 -> 오류 발생시키면 됨
  }, (error) => {
    return Promise.reject(error)
  }
)



export default commentsAxios;
