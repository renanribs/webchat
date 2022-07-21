import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 80vh;
    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #2f3a4e;
    
  }
 
`;

export default GlobalStyle;
