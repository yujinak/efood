import styled from 'styled-components'

import { COLORS } from '../../styles'

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 0 auto 72px;
  column-gap: 32px;

  @media (max-width: 768px) {
    display: block;
    margin: 0 25%;
  }
`

export const Item = styled.li`
  &:hover {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  color: ${COLORS.white};

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalBox = styled.div`
  background-color: ${COLORS.red};
  z-index: 1;
  padding: 8px;
  margin: 490px auto;
  max-width: 1024px;

  header {
    padding: 0;
    display: flex;
    justify-content: end;

    img {
      cursor: pointer;
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 24px 24px 24px;
`

export const Infos = styled.div`
  margin-left: 24px;

  h3 {
    font-size: 18px;
    line-height: 22px;
  }
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
