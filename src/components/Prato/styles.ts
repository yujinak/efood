import styled from 'styled-components'

import { CORES } from '../../styles'
import Tag from '../Tag'
// import { HeaderProps } from '../Header'

export const Card = styled.div`
  display: inline-block;
  margin-bottom: 48px;
  width: 320px;
  background-color: ${CORES.vermelho};
  position: relative;
  padding: 8px;

  .foto {
    vertical-align: top;
    width: 100%;
  }
`
export const Foto = styled.img`
  // margin-bottom: 8px;
  height: 168px;
`

export const Informacoes = styled.div`
  border: 1px solid ${CORES.vermelho};
  border-top: none;
  // padding: 0 8px 8px;
  margin-top: 0;
`

export const Titulo = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: ${CORES.branco};
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${CORES.branco};
  margin-bottom: 8px;
  line-height: 22px;
`

export const Botao = styled(Tag)`
  cursor: pointer;
  }
`
