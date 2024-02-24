import { createGlobalStyle } from 'styled-components'

export const CORES = {
  branco: '#ffffff',
  vermelho: '#E66767',
  bege: '#FFEBD9',
  dourado: '#FFB930',
  creme: '#FFF8F2'
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
    background-color: ${CORES.creme};
    color: ${CORES.vermelho};
  }
`
