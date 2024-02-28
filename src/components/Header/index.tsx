import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import imgFundo from '../../assets/images/fundo.png'

import { CabecalhoHome, CabecalhoPerfil, Logo } from './styles'

export type HeaderProps = {
  type: 'Home' | 'Perfil'
  carrinho?: number
}

const Header = ({ type, carrinho = 0 }: HeaderProps) => {
  if (type === 'Home') {
    return (
      <CabecalhoHome style={{ backgroundImage: `url(${imgFundo})` }}>
        <Logo href="">
          <Link to="/">
            <img className="container" src={logo} alt="" />
          </Link>
        </Logo>
      </CabecalhoHome>
    )
  }

  return (
    <CabecalhoPerfil style={{ backgroundImage: `url(${imgFundo})` }}>
      <Link to="/">
        <h3>Restaurantes</h3>
      </Link>

      <Logo href="">
        <Link to="/">
          <img className="container" src={logo} alt="" />
        </Link>
      </Logo>
      <h3>{carrinho} produto(s) no carrinho</h3>
    </CabecalhoPerfil>
  )
}

export default Header
