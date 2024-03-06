import { useState } from 'react'

import {
  Infos,
  Modal,
  FotoPrato,
  Botao,
  ModalBox,
  ModalContent
} from './styles'

import pizza from '../../assets/images/pizza.png'
import fechar from '../../assets/images/close.png'

import { TipoPrato } from '../../models/tipo'

interface ModalState extends TipoPrato {
  estaVisivel: boolean
}

const ModalComponent = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao,
  estaVisivel
}: ModalState) => {
  const [modal, setModal] = useState<ModalState>({
    estaVisivel: false,
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    porcao: '',
    descricao: ''
  })

  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  const closeModal = () => {
    setModal({
      estaVisivel: false,
      foto: '',
      preco: 0,
      id: 0,
      nome: '',
      porcao: '',
      descricao: ''
    })
  }

  return (
    <>
      <Modal className={modal.estaVisivel ? 'visivel' : ''}>
        <ModalBox className="container">
          <header>
            <img src={fechar} alt="" onClick={() => closeModal()} />
          </header>
          <ModalContent>
            <FotoPrato src={foto} alt={nome} />
            <Infos>
              <h2>{nome}</h2>
              <p>{descricao}</p>
              <p>Serve: de {porcao}</p>
              <Botao>Adicionar ao carrinho - R$ {preco}</Botao>
            </Infos>
          </ModalContent>
        </ModalBox>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default ModalComponent
