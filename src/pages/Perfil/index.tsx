import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ListaPratos from '../../components/ListaPratos'
import restauranteLaDolceVita from '../../data/ladolcevita'

const Perfil = () => (
  <>
    <Header type="Perfil" />
    <Banner type="Perfil" />
    <ListaPratos pratos={restauranteLaDolceVita} />
  </>
)

export default Perfil
