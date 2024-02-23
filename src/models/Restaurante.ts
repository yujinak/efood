class Restaurante {
  categoria: string
  descricao: string
  imagem: string
  infos: string[]
  nome: string
  nota: number
  id: number

  constructor(
    categoria: string,
    descricao: string,
    imagem: string,
    infos: string[],
    nome: string,
    nota: number,
    id: number
  ) {
    this.categoria = categoria
    this.descricao = descricao
    this.imagem = imagem
    this.infos = infos
    this.nome = nome
    this.nota = nota
    this.id = id
  }
}

export default Restaurante
