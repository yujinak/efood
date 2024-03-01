import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import imgFundo from '../../assets/images/fundo.png'
import Banner from '../Banner'

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
            <img src={logo} alt="" />
          </Link>
        </Logo>
        <Banner type={type} />
      </CabecalhoHome>
    )
  }

  return (
    <CabecalhoPerfil style={{ backgroundImage: `url(${imgFundo})` }}>
      <div className="container">
        <Link to="/">
          <h3>Restaurantes</h3>
        </Link>
        <Logo href="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Logo>
        <div>
          <h3>{carrinho} produto(s) no carrinho</h3>
        </div>
      </div>
    </CabecalhoPerfil>
  )
}

export default Header
