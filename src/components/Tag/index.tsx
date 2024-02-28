import { TagContainer, BotaoSaibaMais, BotaoCarrinho } from './styles'

export type Props = {
  type: 'info' | 'botaoSaibaMais' | 'botaoCarrinho'
  children: string
  onClick?: () => void
}

const Tag = ({ children, type }: Props) => {
  if (type === 'botaoCarrinho') {
    return <BotaoCarrinho>{children}</BotaoCarrinho>
  }
  if (type === 'botaoSaibaMais') {
    return <BotaoSaibaMais>{children}</BotaoSaibaMais>
  }

  return <TagContainer>{children}</TagContainer>
}

export default Tag
