import styled from 'styled-components'
import { CORES } from '../../styles'

export const Overlay = styled.div`
  background-color: rgb(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${CORES.vermelho};
  height: 100%;
  width: 360px;
  padding: 32px 8px;
  z-index: 1;
`

export const CartItem = styled.li`
  background-color: ${CORES.bege};
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 4px;
  }

  div {
    position: relative;
    margin-left: 8px;
    width: 100%;

    h3 {
      font-size: 18px;
      font-weight: 900;
      padding-bottom: 16px;
    }
  }

  .lixeira {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`
export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${CORES.bege};
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
`

export const Botao = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
  color: ${CORES.vermelho};
  background-color: ${CORES.bege};
`
