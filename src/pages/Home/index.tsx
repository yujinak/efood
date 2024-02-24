import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'
import restaurantes from '../../data/restaurantes'

const Home = () => (
  <>
    <Header type="Home" />
    <ListaRestaurantes restaurantes={restaurantes} />
  </>
)

export default Home
