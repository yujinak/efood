import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Navigate } from 'react-router-dom'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { formatarPreco } from '../ListaPratos'

const Cart = () => {
  const dispatch = useDispatch()

  const removeItem = (id: number) => dispatch(remove(id))
  const closeCart = () => dispatch(close())

  const [whichForm, setWhichForm] = useState('cart')
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const finished = () => {
    dispatch(clear())
    setWhichForm('cart')
  }

  const form = useFormik({
    initialValues: {
      // Campos de entrega
      deliveryWho: '',
      deliveryAddress: '',
      deliveryCity: '',
      deliveryCep: '',
      deliveryNumber: 0,
      deliveryComplement: '',
      // Campos de cartão
      cardName: '',
      cardNumber: '',
      cardCode: 0,
      expireMonth: 0,
      expireYear: 0
    },
    validationSchema: Yup.object({
      // Campos de entrega
      deliveryWho: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryAddress: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryCity: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryCep: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      deliveryNumber: Yup.number()
        .min(5, 'O número precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      deliveryComplement: Yup.string().min(
        5,
        'O nome precisa ter pelo menos 5 caracteres'
      ),
      // Campos de cartão
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.number()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      expireMonth: Yup.number()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      expireYear: Yup.number()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
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
            number: values.deliveryNumber,
            complement: values.deliveryComplement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cardCode,
            expires: {
              month: values.expireMonth,
              year: values.expireYear
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
            <S.Form className={whichForm === 'checkout' ? 'visible' : ''}>
              <S.FormGroup>
                <S.Title>Pedido realizado - ORDER_ID</S.Title>
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
            </S.Form>
          ) : (
            <>
              <S.CartBox className={whichForm === 'cart' ? '' : 'visible'}>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
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
                    </S.CartItem>
                  ))}
                </ul>

                <S.ValorTotal>
                  <span>Valor total</span>
                  <span>{formatarPreco(getTotalPrice())}</span>
                </S.ValorTotal>
                <S.Botao onClick={() => setWhichForm('delivery')}>
                  Continuar com a entrega
                </S.Botao>
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
                      <input
                        type="text"
                        id="deliveryCep"
                        value={form.values.deliveryCep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
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
                      value={form.values.deliveryComplement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('deliveryComplement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </S.FormGroup>

                <S.Button type="button" onClick={() => setWhichForm('payment')}>
                  Continuar com o pagamento
                </S.Button>
                <S.Button type="button" onClick={() => setWhichForm('cart')}>
                  Voltar para o carrinho
                </S.Button>

                <S.FormGroup
                  className={whichForm === 'payment' ? 'visible' : ''}
                >
                  <S.Title>Pagamento - Valor a pagar R$ 190,90</S.Title>
                  <S.InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      type="text"
                      id="cardName"
                      value={form.values.cardName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardName') ? 'error' : ''}
                    />
                  </S.InputGroup>

                  <S.Row columnGap="30px">
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="text"
                        id="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row columnGap="34px">
                    <S.InputGroup>
                      <label htmlFor="expireMonth">Mês de vencimento</label>
                      <input
                        type="text"
                        id="expireMonth"
                        value={form.values.expireMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expireMonth') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expireYear">Ano de vencimento</label>
                      <input
                        type="text"
                        id="expireYear"
                        value={form.values.expireYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expireYear') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                </S.FormGroup>
                <S.Button
                  type="submit"
                  onClick={() => setWhichForm('checkout')}
                >
                  Finalizar pagamento
                </S.Button>
                <S.Button
                  type="button"
                  onClick={() => setWhichForm('delivery')}
                >
                  Voltar para a edição de endereço
                </S.Button>
              </S.Form>
            </>
          )}
        </S.Sidebar>
      </S.CartContainer>
    </>
  )
}

export default Cart
