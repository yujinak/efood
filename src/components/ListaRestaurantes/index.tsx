import { TipoRestaurante } from '../../models/tipo'
import Item from '../Loja'
import { Grid } from './styles'

export type Props = {
  restaurantes: TipoRestaurante[]
}

const ListaRestaurantes = ({ restaurantes }: Props) => (
  <div className="container">
    <Grid>
      {restaurantes.map(
        (restaurante: {
          id: number
          tipo: string
          descricao: string
          capa: string
          destacado: boolean
          titulo: string
          avaliacao: number
        }) => (
          <Item
            key={restaurante.id}
            tipo={restaurante.tipo}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            destacado={restaurante.destacado}
            titulo={restaurante.titulo}
            avaliacao={restaurante.avaliacao}
            id={restaurante.id}
          />
        )
      )}
    </Grid>
  </div>
)

export default ListaRestaurantes
