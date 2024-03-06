import { TipoPrato } from '../../models/tipo'

import Item from '../Prato'
import { Grid } from './styles'

type Props = {
  pratos: TipoPrato[]
}

const ListaPratos = ({ pratos }: Props) => (
  <div className="container">
    <Grid>
      {pratos.map((prato) => (
        <Item
          key={prato.id}
          descricao={prato.descricao}
          foto={prato.foto}
          nome={prato.nome}
          id={prato.id}
        />
      ))}
    </Grid>
  </div>
)

export default ListaPratos
