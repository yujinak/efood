import { createGlobalStyle } from 'styled-components'

export const COLORS = {
  white: '#ffffff',
  red: '#E66767',
  beige: '#FFEBD9',
  gold: '#FFB930',
  cream: '#FFF8F2'
}

export const GlobalCSS = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${COLORS.cream};
    color: ${COLORS.red};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
