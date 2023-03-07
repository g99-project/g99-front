import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DefaultBtn from '../../styles/Buttons';
import { Container } from '../../styles/Layout';

// interface IForm {
//     id: "string",
//     pw: "string"
// }

// const Form = styled.form`
//     display: inline-flex;
//     flex-direction: column;
// `;
// const InputWrap = styled.div`
//     display: inline-flex;
//     gap: 1rem;
//     align-items: center;
// `;

function Login() {
    // const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm<IForm>();
    // const chkValid = (data: IForm) => {
    //     console.log('제출')
    // }
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
        // TODO: 정규식 변경
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


    // 로그인 시
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginFn();
    };
    async function loginFn() {
        const data = {
            "email": id,
            "password": pw
        }
        // TODO: api 주소 변경..
        let res = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        let resJson = await res.json();
        try {
            console.log("resJson :: ", resJson);
            // setMsg(resJson.message);
            alert(resJson.message);
            localStorage.setItem('login-token', resJson.token);
            navigate('/todo');
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <Container>
            <h1>🌏로그인부탁</h1>
            {/* <Form onSubmit={handleSubmit(chkValid)}>
                <InputWrap>
                    <label htmlFor='id'>아이디</label>
                    <input id='id' {...register("id", {
                        required: "아이디를 입력하세요"
                    })} type="text" placeholder='아이디' />
                </InputWrap>
                <span>
                    {errors?.id?.message}
                </span>
                <InputWrap>
                    <label htmlFor='pw'>비밀번호</label>
                    <input id='pw' {...register("pw", {
                        required: "패스워드를 입력하세요"
                    })} type="password" placeholder='비번' />
                </InputWrap>
                <span>
                    {errors?.pw?.message}
                </span>
                <DefaultBtn>로그인</DefaultBtn>
            </Form> */}
            <form onSubmit={onSubmit}>
                <input value={id} onChange={onChangeId} type="text" placeholder="아이디" />
                <input value={pw} onChange={onChangePw} type="password" placeholder="비밀번호" />
                <DefaultBtn disabled={isDisabled}>제출</DefaultBtn>
            </form>
            {msg && <p>{msg}</p>}
        </Container>
    )
}

export default Login;