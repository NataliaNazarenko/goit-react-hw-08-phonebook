import { css } from '@emotion/react';
import { theme } from './theme';
import image from '../images/kisspng-telephone-call-landline-handset-blue-phone-5aa57b7c21f4b9.3916346715207944921391.png';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: ${theme.colors.mainBackground};
    background-image: url(${image});
    background-color: #e2b06d;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 50% auto;

    min-height: 100vh;

    background-attachment: fixed;

    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;
