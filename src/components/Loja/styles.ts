import styled from 'styled-components'
import { CORES } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  display: inline-block;
  margin-bottom: 48px;
  background-color: ${CORES.branco};
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

export const Titulo = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${CORES.vermelho};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${CORES.vermelho};
  margin-bottom: 16px;
`

// // Defina os tipos para os elementos filhos
// Card.defaultProps = { as: 'div', children: undefined } as any
// Titulo.defaultProps = { as: 'div', children: undefined } as any
// Descricao.defaultProps = { as: 'p', children: undefined } as any
