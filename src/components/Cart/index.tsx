import { useDispatch, useSelector } from 'react-redux'

import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  ValorTotal,
  Botao
} from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { formatarPreco } from '../ListaPratos'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => dispatch(remove(id))

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatarPreco(item.preco)}</span>
                <img
                  className="lixeira"
                  src={lixeira}
                  alt="Remover item da lista"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            </CartItem>
          ))}

          <ValorTotal>
            <span>Valor total</span>
            <span>{formatarPreco(getTotalPrice())}</span>
          </ValorTotal>
          <Botao>Continuar com a entrega</Botao>
        </ul>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
