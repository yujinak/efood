import styled from 'styled-components'
import { CORES } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: ${(props) =>
    props.type === 'botaoCarrinho' ? 'block' : 'inline-block'};
  margin: 8px;
  padding: 6px 4px;
  text-align: center;
  background-color: ${(props) =>
    props.type === 'botaoCarrinho' ? `${CORES.bege}` : `${CORES.vermelho}`};
  color: ${(props) =>
    props.type === 'botaoCarrinho' ? `${CORES.vermelho}` : `${CORES.bege}`};
  font-weight: bold;
`
