import styled from 'styled-components'

import { CORES } from '../../styles'

export const Slogan = styled.p`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  color: ${CORES.vermelho};
  margin: 0 auto;
  margin-top: 138px;
`

export const Apresentacao = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 56px;
  position: relative;
`

export const Categoria = styled.h2`
  font-weight: lighter;
  font-size: 32px;
  color: ${CORES.branco};
  padding: 24px 0 156px;
`

export const Nome = styled.h2`
  font-weight: bolder;
  font-size: 32px;
  color: ${CORES.branco};
  padding-bottom: 32px;
`
