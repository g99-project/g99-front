import { createGlobalStyle } from "styled-components";
import GlobalFont from './GlobalFont';

const GlobalStyles = createGlobalStyle`
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,body{
    font-size: 62.5%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: 'Pretendard400', sans-serif;
    vertical-align: baseline;

  }
  body {
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    line-height: 1.2;
    font-size: 1.6rem;
  }
  a{
    text-decoration : none;
    font-family: 'Pretendard400', sans-serif;
    color: inherit;
  }
  button{
    font-family: 'Pretendard400', sans-serif;
  }
  h1{
    font-family: 'Pretendard700', sans-serif;
    font-size: 2rem;
  }
  img{
    max-width: 100%;
  }
`;

export default GlobalStyles;