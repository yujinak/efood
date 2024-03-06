import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { CORES } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  display: inline-block;
  margin-bottom: 48px;
  background-color: ${CORES.branco};
  position: relative;
  // max-width: 472px;
  // max-height: 450px;
  // margin-bottom: 48px;

  ${TagContainer} {
    margin-top: 0;
    margin-right: 0;
    line-height: 14px;
    height: 26px;
  }

  .foto {
    vertical-align: top;
    width: 100%;
    height: 218px;
    object-fit: cover;
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-top: 8px;

  > h3 {
    color: ${CORES.vermelho};
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${CORES.vermelho};
  margin-bottom: 16px;
  white-space: pre-line;
  line-height: 22px;
`
