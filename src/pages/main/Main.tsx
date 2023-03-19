import React, { Component } from 'react';
import MainService from '../../service/main/MainService';
import { Container, MainWrap } from '../../styles/Layout';
import { Camera } from 'react-feather';
import { Alert } from 'reactstrap';
import _ from 'lodash';

class Main extends Component {
    constructor(props: any) {
        super(props)

        this.state = {
            boards: []
        }
    }

    componentDidMount() {
    //     MainService.getMain()
    //         .then((response) => {
    //             console.log(response);
    //             if (response.data.success) {
    //                 this.setState({ boards: response.data.item.boardList });
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             // always executed
    //         });
    console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
    }

    render() {
        return (
            <Container className='main'>
                <MainWrap>
                    <h1 style={{ color: 'white' }}>메인이다</h1>
                    <Camera />
                    <Alert color="primary">
                      This is a primary alert — check it out!
                    </Alert>
                </MainWrap>
                {/* <img src="images/temp/main.jpg" alt="" /> */}
            </Container >
        );
    }
}

export default Main;