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

    *,
    ::before,
    ::after {
        box-sizing: border-box;
        font-family: 'Gilroy', sans-serif;
    }
    html{
        font-size: 16px;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Gilroy', sans-serif;
    }

    p, ul, a, h2, h3{
        padding: 0;
        margin: 0;
        transition: all 1s ease;
        font-family: 'Gilroy', sans-serif;
    }

    h2{
        font-size: 3rem;
        font-weight: 800;
        color: #fff;
    }

    h3{

    }

    p, span{
        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text}
    }

`;

export default GlobalStyles;
