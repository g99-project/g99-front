import React, { Component } from 'react';
import MainService from '../../service/main/MainService';
import { Container, MainWrap } from '../../styles/Layout';

class Main extends Component {
    constructor(props: any) {
        super(props)

        this.state = {
            boards: []
        }

    }

    // componentDidMount() {
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
    // }

    render() {
        return (
            <Container className='main'>
                <MainWrap>
                    <h1 style={{ color: 'white' }}>메인이다</h1>
                </MainWrap>
                {/* <img src="images/temp/main.jpg" alt="" /> */}
            </Container >
        );
    }
}

export default Main;