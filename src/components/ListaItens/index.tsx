import Prato from '../../models/Prato'
import Restaurante from '../../models/Restaurante'
import Item from '../Item'
import { Grid } from './styles'

export type Props = {
  restaurantes?: Restaurante[]
  pratos?: Prato[]
}

const ListaItens = ({ restaurantes, pratos }: Props) => {
  if (restaurantes) {
    return (
      <Grid>
        {restaurantes.map((restaurante) => (
          <Item
            key={restaurante.id}
            categoria={restaurante.categoria}
            descricao={restaurante.descricao}
            imagem={restaurante.imagem}
            infos={restaurante.infos}
            nome={restaurante.nome}
            nota={restaurante.nota}
            id={restaurante.id}
            type={'Home'}
          />
        ))}
      </Grid>
    )
  }

  return (
    <Grid>
      {pratos &&
        pratos.map((prato) => (
          <Item
            key={prato.id}
            descricao={prato.descricao}
            imagem={prato.imagem}
            nome={prato.nome}
            id={prato.id}
            type={'Perfil'}
          />
        ))}
    </Grid>
  )
}

export default ListaItens
