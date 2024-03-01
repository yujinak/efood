import styled from 'styled-components'

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  column-gap: 80px;

  @media (max-width: 768px) {
    display: block;
    margin: 0 15%;
  }
`
