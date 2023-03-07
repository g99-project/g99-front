import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NoticeService from '../../service/notice/NoticeService';
import DefaultBtn from '../../styles/Buttons';
import { Container } from '../../styles/Layout';

class NoticeReg extends Component {
    constructor(props: any) {
        super(props)

        this.state = {
            notice: []
        }

    }

    componentDidMount() {
        NoticeService.getNotice()
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({ notice: response.data.item.boardList });
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }

    render() {
        return (
            <Container>
                <h2>글등록</h2>

                <div>
                    <div>글쓰기 인풋박스 추가</div>
                </div>

                <DefaultBtn as="a" href="/board">목록</DefaultBtn>
            </Container>
        );
    }
}

export default NoticeReg;