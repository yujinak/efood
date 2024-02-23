import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Descricao, Informacoes, Tags, Titulo } from './styles'

export type Props = {
  type: 'Home' | 'Perfil'
  categoria?: string
  descricao: string
  imagem: string
  infos?: string[]
  nome: string
  nota?: number
  id: number
}

const Item = ({
  type,
  categoria,
  descricao,
  imagem,
  infos,
  nome,
  nota
}: Props) => {
  if (type === 'Home') {
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
          <Tag type="botaoSaibaMais">Saiba mais</Tag>
        </Informacoes>
      </Card>
    )
  }

  return (
    <Card>
      <img className="foto" src={imagem} alt={nome} />
      <Informacoes>
        <Titulo>
          <h3>{nome}</h3>
        </Titulo>
        <Descricao>{descricao}</Descricao>
        <Tag type="botaoCarrinho">Adicionar ao carrinho</Tag>
      </Informacoes>
    </Card>
  )
}

export default Item
