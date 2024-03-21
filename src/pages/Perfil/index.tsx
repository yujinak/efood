// import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'

import { useParams } from 'react-router-dom'
import { useGetRestauranteQuery } from '../../services/api'

import Cart from '../../components/Cart'
import Loader from '../../components/Loader'

type PerfilParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as PerfilParams

  const { data: restaurante, isLoading } = useGetRestauranteQuery(id)

  if (!restaurante) {
    return (
      <>
        <Loader />
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
      <ListaPratos isLoading={isLoading} pratos={restaurante.cardapio} />
      <Cart />
    </>
  )
}

export default Perfil
