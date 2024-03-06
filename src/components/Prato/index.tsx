import { Botao, Card, Descricao, Foto, Informacoes, Titulo } from './styles'

import { TipoPrato } from '../../models/tipo'

const Prato = ({ descricao, foto, nome }: TipoPrato) => {
  return (
    <Card>
      <Foto className="foto" src={foto} alt={nome} />
      <Informacoes>
        <Titulo>
          <h3>{nome}</h3>
        </Titulo>
        <Descricao>{descricao}</Descricao>
        <Botao type="botaoCarrinho">Mais detalhes</Botao>
      </Informacoes>
    </Card>
  )
}

export default Prato
