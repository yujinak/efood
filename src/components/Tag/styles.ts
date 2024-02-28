import styled from 'styled-components'
import { CORES } from '../../styles'

// export const TagContainer = styled.div<Props>`
//   display: ${(props: { type: string }) =>
//     props.type === 'botaoCarrinho' ? 'block' : 'inline-block'};
//   margin: 8px;
//   padding: 6px 4px;
//   text-align: center;
//   background-color: ${(props: { type: string }) =>
//     props.type === 'botaoCarrinho' ? `${CORES.bege}` : `${CORES.vermelho}`};
//   color: ${(props: { type: string }) =>
//     props.type === 'botaoCarrinho' ? `${CORES.vermelho}` : `${CORES.bege}`};
//   font-weight: bold;
// `

export const TagContainer = styled.div`
  display: inline-block;
  padding: 6px 4px;
  margin-left: 8px;
  text-align: center;
  background-color: ${CORES.vermelho};
  color: ${CORES.bege};
  font-weight: bold;
`

export const BotaoSaibaMais = styled.div`
  display: inline-block;
  padding: 6px 4px;
  text-align: center;
  background-color: ${CORES.vermelho};
  color: ${CORES.bege};
  font-weight: bold;
`

export const BotaoCarrinho = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${CORES.bege};
  color: ${CORES.vermelho};
  border: none;
  padding: 6px 4px;
  text-align: center;
  font-weight: bold;
`
