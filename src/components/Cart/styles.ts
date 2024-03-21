import styled from 'styled-components'
import { COLORS } from '../../styles'

type RowProps = {
  columnGap?: string
}

type InputGroupProps = {
  maxWidth?: string
}

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
  background-color: ${COLORS.red};
  height: 100%;
  width: 360px;
  padding: 32px 8px;
  z-index: 1;
`

export const CartBox = styled.div`
  display: auto;

  &.visible {
    display: none;
  }
`

export const CartItem = styled.li`
  background-color: ${COLORS.beige};
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
    cursor: pointer;
  }

  &.vazio {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    text-align: center;
    cursor: pointer;

    > h3 {
      margin-bottom: 8px;
    }
  }
`
export const ValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.beige};
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
`

export const Form = styled.form`
  color: ${COLORS.beige};
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const FormGroup = styled.div`
  margin-bottom: 18px;
  display: none;

  &.visible {
    display: block;
  }
`

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: ${(props) => props.columnGap || 'auto'};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    background-color: ${COLORS.beige};
    border: none;
    width: 100%;
    color: 14px;
    height: 32px;
    margin: 8px 0;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;

    &.error {
      background-color: ${COLORS.gold};
    }
  }
`

export const ButtonBox = styled.div`
  margin-top: 16px;
`

export const Button = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${COLORS.red};
  background-color: ${COLORS.beige};
  cursor: pointer;
`

export const Checkout = styled.div`
  color: ${COLORS.beige};
  margin-bottom: 10px;
`

export const Message = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
`
