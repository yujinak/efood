import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header type="Home" />
      <ListaRestaurantes restaurantes={restaurantes} isLoading={isLoading} />
    </>
  )
}
export default Home
