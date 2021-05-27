import { createGlobalStyle } from 'styled-components';

// import backgroundSvg from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    /* background: #f0f0f0; url($ {backgroundSvg}) no-repeat */
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16 /*font*/ sans-serif;
  }

  #root {
    /* width: 960px;
    margin: 0 auto;
    padding: 40px 20px; */
  }

  button {
    cursor: pointer;
  }

`;
