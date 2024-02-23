class Prato {
  descricao: string
  imagem: string
  nome: string
  id: number

  constructor(descricao: string, imagem: string, nome: string, id: number) {
    this.descricao = descricao
    this.imagem = imagem
    this.nome = nome
    this.id = id
  }
}

export default Prato
