import styled from 'styled-components'
import { CORES } from '../../styles'

export const FooterSection = styled.footer`
  text-align: center;
  padding: 40px;
  margin: 0 auto;
  background-color: ${CORES.bege};
`
export const Logo = styled.img`
  margin-bottom: 32px;
`

export const Redes = styled.ul`
  // margin-bottom: 80px;
  display: flex;
  justify-content: center;

  li a img {
    margin-right: 8px;
  }
`

export const Descricao = styled.p`
  text-align: center;
  font-size: 10px;
  // margin: 0 20vw;
  margin-top: 80px;
`
