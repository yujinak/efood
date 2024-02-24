import Restaurante from '../../models/Restaurante'
import Item from '../Loja'
import { Grid } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <Grid>
    {restaurantes.map(
      (restaurante: {
        id: number
        categoria: string
        descricao: string
        imagem: string
        infos: string[]
        nome: string
        nota: number
      }) => (
        <Item
          key={restaurante.id}
          categoria={restaurante.categoria}
          descricao={restaurante.descricao}
          imagem={restaurante.imagem}
          infos={restaurante.infos}
          nome={restaurante.nome}
          nota={restaurante.nota}
          id={restaurante.id}
        />
      )
    )}
  </Grid>
)

export default ListaRestaurantes
