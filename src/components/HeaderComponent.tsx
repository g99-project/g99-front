import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    position: sticky;
    top: 0;
    height: 5rem;
    background: #333;
    *{color: #fff}
    nav{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
`;

class HeaderComponent extends Component {
    constructor(props: any) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <Header>
                <nav>
                    <Link to={{
                        pathname: `/join`,
                    }}>로그인</Link>
                    <Link to={{
                        pathname: `/`,
                    }}>메인페이지</Link>
                    <Link to={{
                        pathname: `/notice`,
                    }}>공지사항</Link>
                </nav>
                {/* TODO: 햄버거 버튼이랑 마이페이지 버튼이랑 통합검색버튼 만들기 */}
            </Header>
        );
    }
}

export default HeaderComponent;
