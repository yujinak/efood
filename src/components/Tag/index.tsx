import {
  TagContainer,
  BotaoSaibaMais,
  BotaoCarrinho,
  BotaoModal
} from './styles'

export type Props = {
  type: 'info' | 'botaoSaibaMais' | 'botaoCarrinho' | 'botaoModal'
  children: string | number
  onClick?: () => void
}

const Tag = ({ children, type, onClick }: Props) => {
  if (type === 'botaoCarrinho') {
    return <BotaoCarrinho onClick={onClick}>{children}</BotaoCarrinho>
  }
  if (type === 'botaoSaibaMais') {
    return <BotaoSaibaMais>{children}</BotaoSaibaMais>
  }

  if (type === 'botaoModal') {
    return <BotaoModal>{children}</BotaoModal>
  }

  return <TagContainer>{children}</TagContainer>
}

export default Tag
