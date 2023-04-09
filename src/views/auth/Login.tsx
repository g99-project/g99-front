// import { useNavigate } from 'react-router-dom';

function Login() {
  // id,pw, 버튼 비활성화
  // const [id, setId] = useState<string>('');
  // const [pw, setPw] = useState<string>('');
  // const [setIsDisabled] = useState<boolean>(true);

  // // 유효성 검사
  // const [errorId, setErrorId] = useState<boolean>(false);
  // const [errorPw, setErrorPw] = useState<boolean>(false);
  // const [msg, setMsg] = useState('');

  // // router
  // const navigate = useNavigate();

  // // id input change 이벤트
  // const onChangeId = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setId(value);
  //   const regEx =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  //   if (regEx.test(value)) {
  //     setErrorId(false);
  //     setMsg('');
  //   } else {
  //     setErrorId(true);
  //     setMsg('아이디 형식에 맞지 않습니다.');
  //   }
  //   errorId === false && errorPw === false
  //     ? setIsDisabled(false)
  //     : setIsDisabled(true);
  // };
  // // pw input change 이벤트
  // const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = event;
  //   setPw(value);
  //   if (pw.length >= 6) {
  //     setErrorPw(false);
  //     setMsg('');
  //   } else {
  //     setErrorPw(true);
  //     setMsg('비밀번호는 8자리 이상이어야 합니다.');
  //   }
  //   errorId === false && errorPw === false
  //     ? setIsDisabled(false)
  //     : setIsDisabled(true);
  // };

  // // 로그인 시
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   loginFn();
  // };
  // async function loginFn() {
  //   const data = {
  //     email: id,
  //     password: pw,
  //   };
  //   const res = await fetch('http://localhost:8080/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const resJson = await res.json();
  //   try {
  //     console.log('resJson :: ', resJson);
  //     // setMsg(resJson.message);
  //     alert(resJson.message);
  //     localStorage.setItem('login-token', resJson.token);
  //     navigate('/todo');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return <h1>🌏로그인부탁</h1>;
}

export default Login;
