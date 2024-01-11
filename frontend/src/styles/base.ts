import { css } from 'styled-components';

const base = css`
  :root {
    --primary: #515ce6;
    --success: #3159b3;
    --error: #ba1e45;
    --disabled: #828bed;
    --gray-1: #8e8e93;
    --gray-2: #aeaeb2;
    --gray-3: #c7c7cc;
    --gray-4: #d1d1d6;
    --gray-5: #e5e5ea;
    --gray-6: #f2f2f7;
    --skeleton: #e9eef1;
    --orange-1: #ffb26b;
    --orange-2: #eb982d;
    --yellow: #ffd56f;
    --black: #1a1a1a;
    --white: #fff;
  }
  * {
    color: var(--black);
    font-family: 'GmarketSans';
    font-weight: 500;
  }
  #root {
    font-family: 'GmarketSans';
  }
  body {
    margin: auto;
  }
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 2rem;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

export default base;
