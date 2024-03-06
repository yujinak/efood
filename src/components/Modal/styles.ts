import styled from 'styled-components'

import { BotaoCarrinho } from '../Tag/styles'

import { CORES } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  // display: none;
  align-items: center;
  justify-content: center;

  color: ${CORES.branco};

  &.visivel {
    display: flex;
  }

  .overlay {
    // z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalBox = styled.div`
  background-color: ${CORES.vermelho};
  z-index: 1;
  padding: 8px;
  margin: 490px auto;

  header {
    display: flex;
    justify-content: end;
  }
`

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const Infos = styled.div`
  margin-left: 24px;

  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
    text-justify: inter-word;
  }
`
export const FotoPrato = styled.img`
  object-fit: cover;
  height: 280px;
  width: 280px;
`

export const Botao = styled(BotaoCarrinho)`
  display: block;
  padding: 4px;
  width: auto;
  margin-bottom: 31px;
`
