import styled from 'styled-components'
import { CORES } from '../../styles'

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
  cursor: pointer;
`
export const BotaoModal = styled.button`
  justify-content: center;
  background-color: ${CORES.bege};
  color: ${CORES.vermelho};
  border: none;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  display: block;
  padding: 6px 4px;
  width: auto;
  margin-bottom: 31px;
`
