export interface TipoPrato {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

export type TipoRestaurante = {
  id: number
  name: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: TipoPrato[]
}
