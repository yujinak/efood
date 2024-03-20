import { useDispatch } from 'react-redux'
import { useState } from 'react'

import {
  ModalBox,
  ModalContent,
  FotoPrato,
  Infos,
  Modal,
  Item,
  BotaoModal
} from './styles'

import fechar from '../../assets/images/close.png'

import { Grid } from './styles'
import Prato from '../Prato'

import { add, open } from '../../store/reducers/cart'

type Props = {
  pratos: TipoPrato[]
}

interface ModalState extends TipoPrato {
  estaVisivel: boolean
}

export const formatarPreco = function (preco = 0) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaPratos = ({ pratos }: Props) => {
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

  return (
    <div className="container">
      <Grid>
        {pratos.map((prato) => (
          <Item
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
          </Item>
        ))}
      </Grid>

      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalBox>
          <header>
            <img
              src={fechar}
              alt="Clique para fechar"
              onClick={() => closeModal()}
            />
          </header>
          <ModalContent>
            <FotoPrato src={modal.foto} alt={modal.nome} />
            <Infos>
              <h2>{modal.nome}</h2>
              <p>{modal.descricao}</p>
              <p>Serve: de {modal.porcao}</p>
              <BotaoModal onClick={addToCart}>
                {`Adicionar ao carrinho - ${formatarPreco(modal.preco)}`}
              </BotaoModal>
            </Infos>
          </ModalContent>
        </ModalBox>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </div>
  )
}

export default ListaPratos
