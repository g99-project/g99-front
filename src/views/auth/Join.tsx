import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import { LoginType, PwType } from '../../types/login';
import PostJoinApi from '../../api/auth/postJoinApi';

function Join() {
  // id,pw, 버튼 비활성화
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // 유효성 검사
  const [errorId, setErrorId] = useState<boolean>(false);
  const [errorPw, setErrorPw] = useState<boolean>(false);
  const [errorMsgId, setErrorMsgId] = useState('');
  const [errorMsgPw, setErrorMsgPw] = useState('');

  // input입력 받는부분
  const [id, setId] = useState<LoginType | string>('');
  const [pw, setPw] = useState<PwType | string | any>('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

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
      setErrorMsgId('아이디는 이메일 형식입니다.');
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
      setErrorMsgPw('비밀번호는 8자리 이상입니다.');
    }
    if (errorId === false && errorPw === false) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  // 회원가입
  const joinApp = () => {
    const param = {
      email: id,
      password: pw,
      username: name,
      nickname: nickName,
      phone: phoneNum,
    };
    PostJoinApi(param);
  };

  return (
    <div className="innerWrap login">
      <section>
        <h1>지구구 회원이 되어주세요.</h1>
      </section>
      <section>
        <Form>
          <FormGroup>
            <Label for="inputID">아이디로 회원가입하기</Label>
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
          --- 임시 레이아웃 입니다 ---
          <FormGroup>
            <Input
              id="inputName"
              onChange={e => setName(e.currentTarget.value)}
              name="name"
              placeholder="이름을 입력해주세요"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="inputNickName"
              name="nickname"
              onChange={e => setNickName(e.currentTarget.value)}
              placeholder="닉네임을 입력해주세요"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="inputPhone"
              name="phone"
              onChange={e => setPhoneNum(e.currentTarget.value)}
              placeholder="휴대폰번호를 입력해주세요"
              type="text"
            />
          </FormGroup>
        </Form>
      </section>
      <section>
        <h4 className="formLabel">소셜 회원가입하기</h4>
        <div className="btnWrap notCenter">
          <Button color="primary">카카오</Button>
          <Button color="primary">네이버</Button>
          <Button color="primary">구글</Button>
        </div>
      </section>
      <section className="btnWrap">
        <Button onClick={joinApp} disabled={isDisabled}>
          회원가입
        </Button>
      </section>
    </div>
  );
}

export default Join;
