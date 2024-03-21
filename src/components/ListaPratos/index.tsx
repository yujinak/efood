import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'

import fechar from '../../assets/images/close.png'

import Loader from '../Loader'
import Prato from '../Prato'
import { formatPrice } from '../utils'

import { add, open } from '../../store/reducers/cart'

type Props = {
  pratos?: TipoPrato[]
  isLoading: boolean
}

interface ModalState extends TipoPrato {
  estaVisivel: boolean
}

const ListaPratos = ({ pratos, isLoading }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    const item: TipoPrato = {
      preco: modal.preco,
      id: modal.id,
      foto: modal.foto,
      nome: modal.nome,
      descricao: modal.descricao,
      porcao: modal.porcao
    }
    dispatch(add(item))
    dispatch(open())
    closeModal()
  }

  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    preco: 0,
    id: 0,
    foto: '',
    nome: '',
    porcao: '',
    descricao: ''
  })

  const closeModal = () => {
    setModal({
      estaVisivel: false,
      preco: 0,
      id: 0,
      foto: '',
      nome: '',
      porcao: '',
      descricao: ''
    })
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <S.Grid>
        {pratos &&
          pratos.map((prato) => (
            <S.Item
              key={prato.id}
              onClick={() => {
                setModal({
                  estaVisivel: true,
                  foto: prato.foto,
                  preco: prato.preco,
                  id: prato.id,
                  nome: prato.nome,
                  porcao: prato.porcao,
                  descricao: prato.descricao
                })
              }}
            >
              <Prato
                foto={prato.foto}
                id={prato.id}
                nome={prato.nome}
                descricao={
                  prato.descricao.length > 100
                    ? `${prato.descricao.slice(0, 200)}...`
                    : prato.descricao
                }
              />
            </S.Item>
          ))}
      </S.Grid>

      <S.Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <S.ModalBox>
          <header>
            <img
              src={fechar}
              alt="Clique para fechar"
              onClick={() => closeModal()}
            />
          </header>
          <S.ModalContent>
            <S.FotoPrato src={modal.foto} alt={modal.nome} />
            <S.Infos>
              <h2>{modal.nome}</h2>
              <p>{modal.descricao}</p>
              <p>Serve: de {modal.porcao}</p>
              <S.BotaoModal onClick={addToCart}>
                {`Adicionar ao carrinho - ${formatPrice(modal.preco)}`}
              </S.BotaoModal>
            </S.Infos>
          </S.ModalContent>
        </S.ModalBox>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </div>
  )
}

export default ListaPratos
