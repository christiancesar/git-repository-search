import { createGlobalStyle } from 'styled-components';
import githubBackgroud from '../assets/github-backgroud.svg';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F2F2FA url(${githubBackgroud}) no-repeat 70% top;

  }

  body, input, button {
    font: 16px Roboto, sans-serif
  }

  input {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
  }
`;
