import { GridLoader } from 'react-spinners'
import { COLORS } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <GridLoader color={COLORS.red} />
  </Container>
)

export default Loader
