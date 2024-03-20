import styled from 'styled-components'
import { COLORS } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  padding: 6px 4px;
  margin-left: 8px;
  text-align: center;
  background-color: ${COLORS.red};
  color: ${COLORS.beige};
  font-weight: bold;
`

export const BotaoSaibaMais = styled.div`
  display: inline-block;
  padding: 6px 4px;
  text-align: center;
  background-color: ${COLORS.red};
  color: ${COLORS.beige};
  font-weight: bold;
`

export const BotaoCarrinho = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${COLORS.beige};
  color: ${COLORS.red};
  border: none;
  padding: 6px 4px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
`
export const BotaoModal = styled.button`
  justify-content: center;
  background-color: ${COLORS.beige};
  color: ${COLORS.red};
  border: none;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  display: block;
  padding: 6px 4px;
  width: auto;
  margin-bottom: 31px;
`
