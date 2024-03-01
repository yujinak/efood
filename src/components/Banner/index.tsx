import { Apresentacao, Categoria, Nome, Slogan } from './styles'

import dadosRestaurantes from '../../data/restaurantes'

type Props = {
  type: 'Home' | 'Perfil'
}

const Banner = ({ type }: Props) => {
  if (type === 'Home') {
    return (
      <Slogan>
        <div className="container">
          Viva experiências gastronômicas <br /> no conforto da sua casa
        </div>
      </Slogan>
    )
  }

  return (
    <Apresentacao>
      <div className="container">
        <Categoria>{dadosRestaurantes[2].categoria}</Categoria>
        <Nome>{dadosRestaurantes[2].nome}</Nome>
      </div>
    </Apresentacao>
  )
}

export default Banner
