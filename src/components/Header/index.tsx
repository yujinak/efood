import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'
import imgFundo from '../../assets/images/fundo.png'
import Banner from '../Banner'

import { CabecalhoHome, CabecalhoPerfil, Logo } from './styles'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export type HeaderProps = {
  type: 'Home' | 'Perfil'
}

const Header = ({ type }: HeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
          <h3 className="botaoRestaurantes">Restaurantes</h3>
        </Link>
        <Logo href="">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Logo>
        <div>
          <h3 className="carrinho" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </h3>
        </div>
      </div>
    </CabecalhoPerfil>
  )
}

export default Header
