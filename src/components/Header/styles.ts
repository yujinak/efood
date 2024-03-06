import styled from 'styled-components'
import { CORES } from '../../styles'

export const CabecalhoHome = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 0;
  margin-bottom: 120px;
  padding: 40px 40px 64px;
  justify-content: space-between;
  align-items: center;
`

export const CabecalhoPerfil = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-wrap: nowrap;

  .botaoRestaurantes {
    color: ${CORES.vermelho};
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Logo = styled.a`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
