import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Descricao, Informacoes, Tags, Titulo } from './styles'

const Loja = ({
  id,
  destacado,
  descricao,
  capa,
  titulo,
  avaliacao,
  tipo
}: TipoRestaurante) => {
  return (
    <Card to={`/restaurantes/${id}`}>
      <img className="foto" src={capa} alt={titulo} />
      <Tags>
        <Tag tipo="info">{tipo}</Tag>
        {destacado ? <Tag tipo="info">Destaque da Semana</Tag> : null}
      </Tags>
      <Informacoes>
        <Titulo>
          <h3>{titulo}</h3>
          <h3>
            {avaliacao} <img src={estrela} alt="" />
          </h3>
        </Titulo>
        <Descricao>{descricao}</Descricao>
        <Link to={`/restaurantes/${id}`}>
          <Tag tipo="botaoSaibaMais">Saiba mais</Tag>
        </Link>
      </Informacoes>
    </Card>
  )
}

export default Loja
