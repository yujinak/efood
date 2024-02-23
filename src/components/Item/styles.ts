import styled from 'styled-components'
import { CORES } from '../../styles'
import { TagContainer } from '../Tag/styles'

import { Props } from '.'

export const Card = styled.div<Props>`
  display: inline-block;
  margin-bottom: 48px;
  background-color: ${(props) =>
    props.type === 'Home' ? `${CORES.branco}` : `${CORES.vermelho}`};
  position: relative;

  ${TagContainer} {
    margin-top: 0;
    margin-right: 0;
  }

  .foto {
    vertical-align: top;
    width: 100%;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Informacoes = styled.div`
  border: 1px solid ${CORES.vermelho};
  border-top: none;
  padding: 0 8px 8px;
  margin-top: 0;
`

export const Titulo = styled.div<Props>`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) =>
    props.type === 'Home' ? `${CORES.vermelho}` : `${CORES.branco}`};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-top: 8px;
`

export const Descricao = styled.p<Props>`
  font-size: 14px;
  color: ${(props) =>
    props.type === 'Home' ? `${CORES.vermelho}` : `${CORES.branco}`};
  margin-bottom: 16px;
`

// Defina os tipos para os elementos filhos
Card.defaultProps = { as: 'div' }
Titulo.defaultProps = { as: 'div' }
Descricao.defaultProps = { as: 'p' }
