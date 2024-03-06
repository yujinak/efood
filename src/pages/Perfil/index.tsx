import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
// import ModalComponent from '../../components/Modal'

import { TipoPrato } from '../../models/tipo'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [pratos, setPratos] = useState<TipoPrato[]>([])

  useEffect(() => {
    const AJAXCall = async function () {
      try {
        const xhttp = new XMLHttpRequest()
        const endpoint = `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`

        xhttp.open('GET', endpoint, true)
        xhttp.send()

        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status === 200) {
            const { cardapio } = JSON.parse(xhttp.responseText)
            console.log(cardapio)
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
  })

  return (
    <>
      <Header type="Perfil" />
      <Banner type="Perfil" />
      <ListaPratos pratos={pratos} />
    </>
  )
}

export default Perfil
