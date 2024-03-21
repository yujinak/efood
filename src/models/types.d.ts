declare interface TipoPrato {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

declare type TipoRestaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: TipoPrato[]
}
