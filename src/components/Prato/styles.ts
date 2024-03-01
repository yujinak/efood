import styled from 'styled-components'

import { CORES } from '../../styles'
import Tag from '../Tag'
// import { HeaderProps } from '../Header'

export const Card = styled.div`
  display: inline-block;
  margin-bottom: 48px;
  background-color: ${CORES.vermelho};
  position: relative;

  .foto {
    vertical-align: top;
    width: 100%;
  }
`
// margin-bottom: ${(props) => (props.type === 'Home' ? '80px' : '0')}

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
  color: ${CORES.branco};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${CORES.branco};
  margin-bottom: 16px;
`

export const Botao = styled(Tag)`
  cursor: pointer;
  }
`
