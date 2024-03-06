import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
import ModalComponent from '../../components/Modal'

import { TipoPrato } from '../../models/tipo'

const Perfil = () => {
  const [pratos, setPratos] = useState<TipoPrato[]>([])

  useEffect(() => {
    const AJAXCall = async function () {
      try {
        const xhttp = new XMLHttpRequest()
        const endpoint =
          'https://fake-api-tau.vercel.app/api/efood/restaurantes/1'

        xhttp.open('GET', endpoint, true)
        xhttp.send()

        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status === 200) {
            const { cardapio } = JSON.parse(xhttp.responseText)
            if (cardapio.length > 0) setPratos(cardapio)
          } else {
            console.log('Erro ao receber a resposta e transformar em objeto JS')
          }
        }
      } catch (erro) {
        console.log(`⚠⚠⚠ Erro durante requisição HTTP: ${erro}`)
      }
    }

    AJAXCall()
  }, [])

  return (
    <>
      <Header type="Perfil" />
      <Banner type="Perfil" />
      <ListaPratos pratos={pratos} />
      <ModalComponent
        estaVisivel={false}
        foto={''}
        id={0}
        nome={''}
        descricao={''}
      />
    </>
  )
}

export default Perfil
