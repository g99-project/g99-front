import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Container } from '../../styles/Layout';
import DefaultBtn from '../../styles/Buttons';

function SignUp() {
    // id,pw, 버튼 비활성화
    const [id, setId] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    // 유효성 검사
    const [errorId, setErrorId] = useState<boolean>(false);
    const [errorPw, setErrorPw] = useState<boolean>(false);
    const [msg, setMsg] = useState('');

    // router
    const navigate = useNavigate();

    // id input change 이벤트
    const onChangeId = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setId(value);
        // TODO: 정규식 바꾸기
        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        if (regEx.test(value)) {
            setErrorId(false);
            setMsg('');
        } else {
            setErrorId(true);
            setMsg('아이디 형식에 맞지 않습니다.');
        }
        errorId === false && errorPw === false ? setIsDisabled(false) : setIsDisabled(true);
    };
    // pw input change 이벤트
    const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = event;
        setPw(value);
        if (pw.length >= 6) {
            setErrorPw(false);
            setMsg('');
        } else {
            setErrorPw(true);
            setMsg('비밀번호는 8자리 이상이어야 합니다.');
        }
        errorId === false && errorPw === false ? setIsDisabled(false) : setIsDisabled(true);
    };


    // 회원가입 시
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginFn();
    };
    async function loginFn() {
        const data = {
            "email": id,
            "password": pw
        }
        // TODO: api 주소변경
        const res = await fetch("http://localhost:8080/users/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const resJson = await res.json();
        try {
            console.log("resJson :: ", resJson);
            // setMsg(resJson.message);
            alert(resJson.message);
            navigate('/auth');
        } catch (err) {
            setMsg('회원가입 실패');
            console.log(err)
        }
    }

    return (
        <Container>
            <h1>🌏지구구에 오신것을 환영해요🌳<br /> 회원이 아니시라면 회원가입 부탁</h1>
            <form onSubmit={onSubmit}>
                <input value={id} onChange={onChangeId} type="text" placeholder="이메일" />
                <input value={pw} onChange={onChangePw} type="password" placeholder="비밀번호" />
                <DefaultBtn disabled={isDisabled}>회원가입</DefaultBtn>
            </form>
            {msg && <p>{msg}</p>}
            <p>
                <DefaultBtn as="a" href="/login">로그인하러가기</DefaultBtn>
            </p>
        </Container>
    );
}

export default SignUp;