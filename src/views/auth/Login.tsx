import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { LoginRes, LoginType, PwType } from '../../types/login';
import PostLoginApi from '../../api/auth/postLoginApi';
import loginState from '../../atoms/atoms';

function Login() {
  const navigate = useNavigate();
  // id,pw, 버튼 비활성화
  const [id, setId] = useState<LoginType | string>('');
  const [pw, setPw] = useState<PwType | string | any>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // 유효성 검사
  const [errorId, setErrorId] = useState<boolean>(false);
  const [errorPw, setErrorPw] = useState<boolean>(false);
  const [errorMsgId, setErrorMsgId] = useState('');
  const [errorMsgPw, setErrorMsgPw] = useState('');

  // const setLogin: SetterOrUpdater<boolean> = useSetRecoilState(loginState);

  // id input change 이벤트
  const onChangeId = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setId(value);
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    if (regEx.test(value)) {
      setErrorId(false);
      setErrorMsgId('');
    } else {
      setErrorId(true);
      setErrorMsgId('아이디는 이메일 형식으로 작성해주세요.');
    }

    if (errorId === false && errorPw === false) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  // pw input change 이벤트
  const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPw(value);
    if (pw.length >= 6) {
      setErrorPw(false);
      setErrorMsgPw('');
    } else {
      setErrorPw(true);
      setErrorMsgPw('비밀번호는 8자리 이상으로 작성해주세요.');
    }
    if (errorId === false && errorPw === false) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  // login api 호출
  const loginApp = async () => {
    const params = {
      username: id,
      password: pw,
    };
    const res: LoginRes | undefined = await PostLoginApi(params);
    console.log(res);
    if (res?.status === '200') {
      alert(res?.message);
      // setLogin(true);
      navigate('/');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div className="innerWrap login">
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
              onChange={onChangeId}
            />
            {errorId && <FormText>{errorMsgId}</FormText>}
          </FormGroup>
          <FormGroup>
            <Input
              id="inputPW"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              onChange={onChangePw}
            />
            {errorPw && <FormText>{errorMsgPw}</FormText>}
          </FormGroup>
        </Form>
      </section>
      <section>
        <h4 className="formLabel">소셜 로그인 하기</h4>
        <div className="btnWrap notCenter">
          <Button color="primary">카카오</Button>
          <Button color="primary">네이버</Button>
          <Button color="primary">구글</Button>
        </div>
      </section>
      <section className="btnWrap">
        <Button color="link">기억이 안나요</Button>
        <Button color="primary" disabled={isDisabled} onClick={loginApp}>
          로그인
        </Button>
        <Button>
          <Link to="/join">회원가입</Link>
        </Button>
      </section>
    </div>
  );
}

export default Login;
