import { useParams } from 'react-router-dom'

import { useGetRestauranteQuery } from '../../services/api'
import { Apresentacao, Categoria, Nome, Slogan } from './styles'

type Props = {
  type: 'Home' | 'Perfil'
  titulo?: string
  tipo?: string
  capa?: string
  id?: string
}

const Banner = ({ type, titulo, tipo }: Props) => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteQuery(id!)

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
    <Apresentacao
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${restaurante!.capa})`
      }}
    >
      <div className="container">
        <Categoria>
          {tipo ? tipo?.slice(0, 1).toUpperCase() + tipo?.slice(1) : null}
        </Categoria>
        <Nome>{titulo}</Nome>
      </div>
    </Apresentacao>
  )
}

export default Banner
