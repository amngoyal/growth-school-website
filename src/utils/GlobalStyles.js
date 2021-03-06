import { createGlobalStyle } from "styled-components";
import GilroyExtraBoldWoff2 from "./../assets/fonts/Gilroy-ExtraBold.woff2";
import GilroyBoldWoff2 from "./../assets/fonts/Gilroy-Bold.woff2";
import GilroySemiBoldWoff2 from "./../assets/fonts/Gilroy-SemiBold.woff2";
import GilroyMediumWoff2 from "./../assets/fonts/Gilroy-Medium.woff2";
import GilroyRegularWoff2 from "./../assets/fonts/Gilroy-Regular.woff2";

import GilroyExtraBoldWoff from "./../assets/fonts/Gilroy-ExtraBold.woff";
import GilroyBoldWoff from "./../assets/fonts/Gilroy-Bold.woff";
import GilroySemiBoldWoff from "./../assets/fonts/Gilroy-SemiBold.woff";
import GilroyMediumWoff from "./../assets/fonts/Gilroy-Medium.woff";
import GilroyRegularWoff from "./../assets/fonts/Gilroy-Regular.woff";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        font-weight: 800;
        src:  local('Gilroy'),
            url(${GilroyExtraBoldWoff2}) format('woff2'),
            url(${GilroyExtraBoldWoff}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 700;
        src:  local('Gilroy'),
            url(${GilroyBoldWoff2}) format('woff2'),
            url(${GilroyBoldWoff}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 600;
        src:  local('Gilroy'),
            url(${GilroySemiBoldWoff2}) format('woff2'),
            url(${GilroySemiBoldWoff}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Gilroy';
        font-weight: 500;
        src:  local('Gilroy'),
            url(${GilroyMediumWoff2}) format('woff2'),
            url(${GilroyMediumWoff}) format('woff');
        font-style: normal;
    }
    @font-face {

        font-family: 'Gilroy';
        font-weight: 400;
        src:  local('Gilroy'),
            url(${GilroyRegularWoff2}) format('woff2'),
            url(${GilroyRegularWoff}) format('woff');
        font-style: normal;
    }


    ::-webkit-scrollbar {
    width:5px;
}
::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background:#fff;
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    background: #056A67;
    height:0px;
}

    *,
    ::before,
    ::after {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Gilroy', sans-serif;
    }
    html{
        font-size: 16px;

        @media(max-width: 576px){
            font-size: 14px;
        }
      
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Gilroy', sans-serif;
    }

    p, ul, a, h2, h3{
        padding: 0;
        margin: 0;
        font-family: 'Gilroy', sans-serif;
    }

    h2{
        font-size: 3rem;
        font-weight: 800;
        color: #fff;
        text-align: center;

        @media(max-width: 576px){
            font-size: 2.5rem;
        }
    }
    h4{
        font-size: 2.25;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.aquaDeep};

    @media(max-width: 576px){
            font-size: 2rem;
        }
    }

    h5{
        font-size: 1.5rem;
        font-weight: 800;
        color: ${({ theme }) => theme.colors.aquaDeep};

        @media(max-width: 576px){
            font-size: 1.2rem;
        }
    }
    h6{
        font-size: 1.06rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.aquaDeep}
    }

    p, span{
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text}
    }
    b{
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.aquaDeep}
    }

    a{
        font-size: 14px;
        color: #ffffff80;
        font-weight: 500;
        text-decoration: none;
    }

`;

export default GlobalStyles;
