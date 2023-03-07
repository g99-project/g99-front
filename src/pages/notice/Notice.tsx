import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Pagination from "react-js-pagination";

import NoticeService from '../../service/notice/NoticeService';
import DefaultBtn from '../../styles/Buttons';
import { Container } from '../../styles/Layout';

class Notice extends React.Component<{}, { list: any }> {
    constructor(props: any) {
        super(props)
        this.state = {
            list: []
        }

    }

    componentDidMount() {
        NoticeService.getNotice()
            .then((response) => {
                console.log(response);
                if (response.data.success) {
                    this.setState({ list: response.data.item.page.content });
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
                <h1>공지사항</h1>
                <table>
                    <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>타이틀 </th>
                            <th>작성자 </th>
                            <th>작성일 </th>
                            <th>갱신일 </th>
                            <th>좋아요수</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td> {item.id} </td>
                                    <td> {item.title} </td>
                                    <td> {item.modifyId} </td>
                                    <td> {item.registDt} </td>
                                    <td> {item.modifyDt} </td>
                                    <td> {item.likes} </td>
                                    <td> {item.viewCount} </td>
                                </tr>
                            )
                        })}
                        
                        {/* {
                            this.state.boards.map(
                                item =>
                                    <tr key={item.id}>
                                        <td> {item.id} </td>
                                        <td> {item.title} </td>
                                        <td> {item.modifyId} </td>
                                        <td> {item.registDt} </td>
                                        <td> {item.modifyDt} </td>
                                        <td> {item.likes} </td>
                                        <td> {item.viewCount} </td>
                                    </tr>
                            )
                        } */}
                        
                    </tbody>
                </table>
                {/* <Link to="/board/reg">글쓰기</Link> */}
                <DefaultBtn as="a" href="/board/reg">글쓰기</DefaultBtn>
            </Container>
        );
    }
}

export default Notice;