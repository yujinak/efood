import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'

import { useGetRestaurantsQuery } from '../../services/api'

import spinner from '../../assets/spinner.gif'

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <Header type="Home" />
        <ListaRestaurantes restaurantes={restaurantes} />
      </>
    )
  }

  return (
    <>
      <h4>Carregando...</h4>
      <img src={spinner} alt="" />
    </>
  )
}
export default Home
