import { Apresentacao, Categoria, Nome, Slogan } from './styles'

type Props = {
  type: 'Home' | 'Perfil'
  titulo?: string
  tipo?: string
}

const Banner = ({ type, titulo, tipo }: Props) => {
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
        <Categoria>
          {tipo ? tipo?.slice(0, 1).toUpperCase() + tipo?.slice(1) : null}
        </Categoria>
        <Nome>{titulo}</Nome>
      </div>
    </Apresentacao>
  )
}

export default Banner
