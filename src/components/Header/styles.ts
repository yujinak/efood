import styled from 'styled-components'

export const CabecalhoHome = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 120px;
  padding: 40px 40px 64px;
  justify-content: space-between;
  align-items: center;
`

export const CabecalhoPerfil = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0 64px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  text-wrap: nowrap;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container img {
  }
`

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const Link = styled.a`
  color: red;
`
