// import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'

import { useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../services/api'

import spinner from '../../assets/spinner.gif'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return (
      <>
        <h4>Carregando...</h4>
        <img src={spinner} alt="" />
      </>
    )
  }

  return (
    <>
      <Header type="Perfil" />
      <Banner
        type="Perfil"
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ListaPratos pratos={restaurante.cardapio!} />
      <Cart></Cart>
    </>
  )
}

export default Perfil
