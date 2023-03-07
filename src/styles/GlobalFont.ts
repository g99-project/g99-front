import { createGlobalStyle } from "styled-components";
import Pretendard from '../assets/fonts/PretendardVariable.woff2';


export default createGlobalStyle`
    @font-face {
        font-family: "Pretendard400";
        src: local("Pretendard400"),
        url(${Pretendard}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard500";
        src: local("Pretendard400"),
        url(${Pretendard}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "Pretendard700";
        src: local("Pretendard400"),
        url(${Pretendard}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
`;
