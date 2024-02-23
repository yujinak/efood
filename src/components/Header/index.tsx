import logo from '../../assets/images/logo.png'
import imgFundo from '../../assets/images/fundo.png'

import { Cabecalho, Logo } from './styles'

const Header = () => (
  <Cabecalho style={{ backgroundImage: `url(${imgFundo})` }}>
    <Logo href="">
      <img src={logo} alt="" />
    </Logo>
  </Cabecalho>
)

export default Header
