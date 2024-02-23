import { Apresentacao, Categoria, Nome, Slogan } from './styles'

import dadosRestaurantes from '../../data/restaurantes'

type Props = {
  type: 'Home' | 'Perfil'
}

const Banner = ({ type }: Props) => {
  if (type === 'Home') {
    return (
      <Slogan>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Slogan>
    )
  }

  return (
    <Apresentacao>
      <Categoria>{dadosRestaurantes[2].categoria}</Categoria>
      <Nome>{dadosRestaurantes[2].nome}</Nome>
    </Apresentacao>
  )
}

export default Banner
