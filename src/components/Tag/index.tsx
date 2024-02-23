import { TagContainer } from './styles'

export type Props = {
  type: 'info' | 'botaoSaibaMais' | 'botaoCarrinho'
  children: string
}

const Tag = ({ children, type }: Props) => (
  <TagContainer type={type}>{children}</TagContainer>
)

export default Tag
