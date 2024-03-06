import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import { TipoRestaurante } from '../../models/tipo'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<TipoRestaurante[]>([])

  useEffect(() => {
    const AJAXCall = async function () {
      try {
        const xhttp = new XMLHttpRequest()
        const endpoint =
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'

        xhttp.open('GET', endpoint, true)
        xhttp.send()

        xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status === 200) {
            const resposta = JSON.parse(xhttp.responseText)
            console.log(resposta)
            if (resposta.length > 0) setRestaurantes(resposta)
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
      <Header type="Home" />
      <ListaRestaurantes restaurantes={restaurantes} />
    </>
  )
}
export default Home
