import { Personagem } from "./Personagem";

export class Inimigo extends Personagem {
  constructor(nome: string, vida: number, forca: number) {
    super(nome, vida, forca);
  }

  public atacar(alvo: Personagem): void {
    if (Math.random() > 0.2) { // 80% de chance de sucesso (diferente do personagem)
      const dano = this.getForca();
      alvo.receberDano(dano);
      console.log(`${this.getNome()} atacou ${alvo.getNome()} causando ${dano} de dano.`);
    } else {
      console.log(`${this.getNome()} errou o ataque!`);
    }
  }

  public comportamentoAleatorio(jogador: Personagem): void {
    if (Math.random() > 0.5) {
      this.atacar(jogador);
    } else {
      console.log(`${this.getNome()} está observando e aguardando.`);
    }
  }
}
