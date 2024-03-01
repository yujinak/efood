import Prato from '../../models/Prato'
import Item from '../Prato'
import { Grid } from './styles'

export type Props = {
  pratos: Prato[]
}

const ListaPratos = ({ pratos }: Props) => (
  <div className="container">
    <Grid>
      {pratos.map((prato) => (
        <Item
          key={prato.id}
          descricao={prato.descricao}
          imagem={prato.imagem}
          nome={prato.nome}
          id={prato.id}
        />
      ))}
    </Grid>
  </div>
)

export default ListaPratos
