import { Botao, Card, Descricao, Foto, Informacoes, Titulo } from './styles'

export type PratoProps = {
  descricao: string
  imagem: string
  nome: string
  id: number
}

const Prato = ({ descricao, imagem, nome }: PratoProps) => {
  return (
    <Card>
      <Foto className="foto" src={imagem} alt={nome} />
      <Informacoes>
        <Titulo>
          <h3>{nome}</h3>
        </Titulo>
        <Descricao>{descricao}</Descricao>
        <Botao type="botaoCarrinho">Adicionar ao carrinho</Botao>
      </Informacoes>
    </Card>
  )
}

export default Prato
