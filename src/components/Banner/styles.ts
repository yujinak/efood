import styled from 'styled-components'

import { CORES } from '../../styles'
import dadosRestaurantes from '../../data/restaurantes'

export const Slogan = styled.p`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  color: ${CORES.vermelho};
  padding-bottom: 40px;
`

export const Apresentacao = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${dadosRestaurantes[2].imagem});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 56px;
`

export const Categoria = styled.h2`
  font-weight: lighter;
  font-size: 32px;
  color: ${CORES.branco};
  padding: 24px 0 156px 170px;
`

export const Nome = styled.h2`
  font-weight: bolder;
  font-size: 32px;
  color: ${CORES.branco};
  padding-bottom: 32px;
  padding-left: 170px;
`
