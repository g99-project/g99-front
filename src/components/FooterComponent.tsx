import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    background: #f1f1f1;
`;

class FooterComponent extends Component {
    constructor(props: any) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Footer>
                <p>g99 project</p>
            </Footer>
        );
    }
}

export default FooterComponent;