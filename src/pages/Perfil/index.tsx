import Banner from '../../components/Banner'
import ListaItens from '../../components/ListaItens'
import restauranteLaDolceVita from '../../data/ladolcevita'

const Perfil = () => (
  <>
    <Banner type="Perfil" />
    <ListaItens pratos={restauranteLaDolceVita} />
  </>
)

export default Perfil
