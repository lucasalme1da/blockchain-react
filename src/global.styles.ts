import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;700&display=swap');

    body > #root > div {
      height: 100vh;
    }

    body {

    background: #101010;
    color: lightgray;
    font-family: 'Red Hat Display', sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-size: 14px;
    width: 100vw;
    height: 100vh;

    top: 0px !important;

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #393739 #292929;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: #292929;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #393739;
    border-radius: 10px;
    border: 3px groove #878787;
  }
  }

  svg.apexcharts-svg { background: transparent !important; }


`;
