import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'

import * as S from './styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { formatPrice, getTotalPrice } from '../utils'

const Cart = () => {
  const dispatch = useDispatch()

  const removeItem = (id: number) => dispatch(remove(id))
  const closeCart = () => dispatch(close())

  const [whichForm, setWhichForm] = useState('cart')
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const finished = () => {
    dispatch(clear())
    setWhichForm('cart')
    closeCart()
  }

  const form = useFormik({
    initialValues: {
      // Campos de entrega
      deliveryWho: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryCep: '',
      deliveryNumber: '',
      deliveryComplement: '',
      // Campos de cartão
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      // Campos de entrega
      deliveryWho: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryAddress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryCity: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      deliveryCep: Yup.string()
        .min(9, 'O CEP precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      deliveryNumber: Yup.number()
        .min(2, 'O número precisa ter pelo menos 2 caractere')
        .required('O campo é obrigatório'),
      deliveryComplement: Yup.string().min(
        5,
        'O complemento precisa ter pelo menos 5 caracteres'
      ),
      // Campos de cartão
      cardName: Yup.string()
        .min(5, 'O nome do cartão precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(18, 'O número do cartão precisa ter 15 ou 16 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.number()
        .min(3, 'O CVV precisa ter 3 dígitos')
        .required('O campo é obrigatório'),
      expireMonth: Yup.number()
        .min(2, 'O mês de vencimento precisa ter 2 dígitos')
        .required('O campo é obrigatório'),
      expireYear: Yup.number()
        .min(4, 'O ano de vencimento precisa ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        products: items.map((plate) => ({
          id: plate.id,
          price: plate.preco as number
        })),
        delivery: {
          receiver: values.deliveryWho,
          address: {
            description: values.deliveryAddress,
            city: values.deliveryCity,
            zipCode: values.deliveryCep,
            number: Number(values.deliveryNumber),
            complement: values.deliveryComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          {isSuccess && data ? (
            <S.Checkout>
              <S.FormGroup className="visible checkout">
                <S.Title>Pedido realizado - {data.orderId}</S.Title>
                <S.Message>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </S.Message>
                <S.Message>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </S.Message>
                <S.Message>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </S.Message>
                <S.Message>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </S.Message>
              </S.FormGroup>
              <S.Button type="button" onClick={finished}>
                Concluir
              </S.Button>
            </S.Checkout>
          ) : (
            <>
              <S.CartBox className={whichForm === 'cart' ? '' : 'visible'}>
                {items.length === 0 ? (
                  <S.CartItem onClick={closeCart} className="vazio">
                    <h3>Ops, o carrinho está vazio! 🛒</h3>
                    <span>
                      Adicione um prato ao carrinho para continuar com a compra
                      😋
                    </span>
                  </S.CartItem>
                ) : (
                  <>
                    <ul>
                      {items.map((item) => (
                        <S.CartItem key={item.id}>
                          <img src={item.foto} alt={item.nome} />
                          <div>
                            <h3>{item.nome}</h3>
                            <span>{formatPrice(item.preco)}</span>
                            <img
                              className="lixeira"
                              src={lixeira}
                              alt="Remover item da lista"
                              onClick={() => removeItem(item.id)}
                            />
                          </div>
                        </S.CartItem>
                      ))}
                    </ul>
                    <S.ValorTotal>
                      <span>Valor total</span>
                      <span>{formatPrice(getTotalPrice(items))}</span>
                    </S.ValorTotal>
                    <S.ButtonBox>
                      <S.Button
                        onClick={() => {
                          items.length >= 1
                            ? setWhichForm('delivery')
                            : alert(
                                'Adicione pelo menos um prato para continuar!'
                              )
                        }}
                      >
                        Continuar com a entrega
                      </S.Button>
                    </S.ButtonBox>
                  </>
                )}
              </S.CartBox>

              <S.Form onSubmit={form.handleSubmit}>
                <S.FormGroup
                  className={whichForm === 'delivery' ? 'visible' : ''}
                >
                  <S.Title>Entrega</S.Title>
                  <S.InputGroup>
                    <label htmlFor="deliveryWho">Quem irá receber</label>
                    <input
                      type="text"
                      id="deliveryWho"
                      name="deliveryWho"
                      value={form.values.deliveryWho}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryWho') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="deliveryAddress">Endereço</label>
                    <input
                      type="text"
                      id="deliveryAddress"
                      name="deliveryAddress"
                      value={form.values.deliveryAddress}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryAddress') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="deliveryCity">Cidade</label>
                    <input
                      type="text"
                      id="deliveryCity"
                      name="deliveryCity"
                      value={form.values.deliveryCity}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryCity') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.Row columnGap="34px">
                    <S.InputGroup>
                      <label htmlFor="deliveryCep">CEP</label>
                      <ReactInputMask
                        type="text"
                        id="deliveryCep"
                        name="deliveryCep"
                        value={form.values.deliveryCep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99999-999"
                        className={
                          checkInputHasError('deliveryCep') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="deliveryNumber">Número</label>
                      <input
                        type="text"
                        id="deliveryNumber"
                        name="deliveryNumber"
                        value={form.values.deliveryNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('deliveryNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="deliveryComplement">
                      Complemento (opcional)
                    </label>
                    <input
                      type="text"
                      id="deliveryComplement"
                      name="deliveryComplement"
                      value={form.values.deliveryComplement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryComplement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.ButtonBox>
                    <S.Button
                      type="button"
                      onClick={() => {
                        setWhichForm('payment')
                      }}
                    >
                      Continuar com o pagamento
                    </S.Button>
                    <S.Button
                      type="button"
                      onClick={() => {
                        setWhichForm('cart')
                      }}
                    >
                      Voltar para o carrinho
                    </S.Button>
                  </S.ButtonBox>
                </S.FormGroup>

                <S.FormGroup
                  className={whichForm === 'payment' ? 'visible' : ''}
                >
                  <S.Title>
                    Pagamento - Valor a pagar{' '}
                    {formatPrice(getTotalPrice(items))}
                  </S.Title>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardName') ? 'error' : ''}
                    />
                  </S.InputGroup>

                  <S.Row columnGap="30px">
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <ReactInputMask
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999 9999 9999 9999"
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <ReactInputMask
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="999"
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row columnGap="34px">
                    <S.InputGroup>
                      <label htmlFor="expireMonth">Mês de vencimento</label>
                      <ReactInputMask
                        type="text"
                        id="expireMonth"
                        name="expireMonth"
                        value={form.values.expireMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="99"
                        className={
                          checkInputHasError('expireMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expireYear">Ano de vencimento</label>
                      <ReactInputMask
                        type="text"
                        id="expireYear"
                        name="expireYear"
                        value={form.values.expireYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        mask="9999"
                        className={
                          checkInputHasError('expireYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.ButtonBox>
                    <S.Button
                      type="submit"
                      disabled={!form.isValid}
                      onClick={() => form.handleSubmit}
                    >
                      Finalizar pagamento
                    </S.Button>
                    <S.Button
                      type="button"
                      onClick={() => {
                        setWhichForm('delivery')
                      }}
                    >
                      Voltar para a edição de endereço
                    </S.Button>
                  </S.ButtonBox>
                </S.FormGroup>
              </S.Form>
            </>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart
