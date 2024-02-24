import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Descricao, Informacoes, Tags, Titulo } from './styles'

export type LojaProps = {
  categoria?: string
  infos?: string[]
  nota?: number
  descricao: string
  imagem: string
  nome: string
  id: number
}

const Loja = ({
  descricao,
  imagem,
  nome,
  infos,
  nota,
  categoria
}: LojaProps) => {
  return (
    <Card>
      <img className="foto" src={imagem} alt={nome} />
      <Tags>
        <Tag type="info">{categoria as string}</Tag>
        {infos &&
          infos.map((info) => (
            <Tag key={info} type="info">
              {info}
            </Tag>
          ))}
      </Tags>
      <Informacoes>
        <Titulo>
          <h3>{nome}</h3>
          <h3>
            {nota} <img src={estrela} alt="" />
          </h3>
        </Titulo>
        <Descricao>{descricao}</Descricao>
        <Link to={`/perfil`}>
          <Tag type="botaoSaibaMais">Saiba mais</Tag>
        </Link>
      </Informacoes>
    </Card>
  )
}

export default Loja
