// import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

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

  return (
    <div id="wrap">
      <div className="container">
        <div className="inner-wrap">
          <section>
            <h1>
              안녕하세요!
              <br />
              지구를 구하기 위해 로그인을 해주세요.
            </h1>
          </section>
          <section>
            <Form>
              <FormGroup>
                <Label for="inputID">아이디로 로그인 하기</Label>
                <Input
                  id="inputID"
                  name="id"
                  placeholder="아이디를 입력해주세요"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="inputPW"
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                />
              </FormGroup>
            </Form>
          </section>
          <section>
            <h4>소셜 로그인 하기</h4>
            <Button color="primary">카카오</Button>
            <Button color="primary">네이버</Button>
            <Button color="primary">구글</Button>
          </section>
          <section>
            <Button color="link">기억이 안나요</Button>
            <Button color="primary">로그인</Button>
            <Button color="primary">회원가입</Button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
