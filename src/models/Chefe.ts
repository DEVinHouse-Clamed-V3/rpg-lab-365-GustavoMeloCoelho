import { Inimigo } from "./Inimigo";
import { Personagem } from "./Personagem";

export class Chefe extends Inimigo {
  constructor(nome: string, vida: number, forca: number) {
    super(nome, vida, forca);
  }

  // O chefe causa o dobro do dano ao atacar
  public atacar(alvo: Personagem): void {
    console.log(`${this.getNome()} realiza um ataque devastador em ${alvo.getNome()}!`);
    
    if (Math.random() < 0.2) { 
      console.log(`${this.getNome()} errou o ataque!`);
      return;
    }

    const dano = (this.getForca() * 2);
    alvo.receberDano(dano);
    
    console.log(`${this.getNome()} causou ${dano} de dano em ${alvo.getNome()}!`);
  }

  // Se o chefe morrer, ele pode tentar um último golpe ou alguma ação especial
  public verificarUltimaAcao(alvo: Personagem): void {
    if (this.getVida() <= 0 && Math.random() < 0.2) {
      console.log(`${this.getNome()} está à beira da morte e faz um último ataque surpresa!`);
      this.atacar(alvo);
    }
  }
}
