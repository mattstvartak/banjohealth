import { createGlobalStyle } from 'styled-components';
import { fontInter } from './fonts';
 
const GlobalStyle = createGlobalStyle`
  ${fontInter}

  body {
    font-family: 'Inter', Sans-Serif !important;
  }

  button.ant-btn {
    background: #4C6FFF;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 0.9em;
    height: 36px;
    padding: 12px 20px;

    span {
      display: block;
    }
    
    &.ant-btn-default {
      background-color: #E4ECF7;
      border: none;
      color: #505780;
      float: left;
      font-weight: bold;
    }
`;
 
export default GlobalStyle