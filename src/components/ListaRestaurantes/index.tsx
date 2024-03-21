import Item from '../Loja'
import { Grid } from './styles'
import Loader from '../Loader'

export type Props = {
  restaurantes?: TipoRestaurante[]
  isLoading: boolean
}

const ListaRestaurantes = ({ restaurantes, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <Grid>
        {restaurantes &&
          restaurantes.map(
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
                tipo={restaurante.tipo.slice(0)}
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
}
export default ListaRestaurantes
