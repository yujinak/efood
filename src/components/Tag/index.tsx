import {
  TagContainer,
  BotaoSaibaMais,
  BotaoCarrinho,
  BotaoModal
} from './styles'

export type Props = {
  tipo: 'info' | 'botaoSaibaMais' | 'botaoCarrinho' | 'botaoModal'
  children: string | number
  onClick?: () => void
}

const Tag = ({ children, tipo, onClick }: Props) => {
  if (tipo === 'botaoCarrinho') {
    return <BotaoCarrinho onClick={onClick}>{children}</BotaoCarrinho>
  }
  if (tipo === 'botaoSaibaMais') {
    return <BotaoSaibaMais>{children}</BotaoSaibaMais>
  }

  if (tipo === 'botaoModal') {
    return <BotaoModal>{children}</BotaoModal>
  }

  return <TagContainer>{children}</TagContainer>
}

export default Tag
