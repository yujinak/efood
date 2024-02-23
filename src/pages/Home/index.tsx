import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaItens'
import restaurantes from '../../data/restaurantes'

const Home = () => (
  <>
    <ListaRestaurantes restaurantes={restaurantes} />
  </>
)

export default Home
