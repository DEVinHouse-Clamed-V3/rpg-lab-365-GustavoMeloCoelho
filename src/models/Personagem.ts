import { Arma } from "./Arma";

export class Personagem {
  private nome: string;
  private vida: number;
  private forca: number;
  private arma: Arma | null;

  constructor(nome: string, vida: number, forca: number, arma: Arma | null = null) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.arma = arma;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getVida(): number {
    return this.vida;
  }

  public setVida(vida: number): void {
    this.vida = vida < 0 ? 0 : vida; // A vida não pode ser negativa
  }

  public getForca(): number {
    return this.forca;
  }

  public setForca(forca: number): void {
    if (forca < 0) throw new Error("A força não pode ser negativa.");
    this.forca = forca;
  }

  public getArma(): Arma | null {
    return this.arma;
  }

  public setArma(arma: Arma | null): void {
    this.arma = arma;
  }

  public atacar(alvo: Personagem): void {
    if (Math.random() > 0.5) { // 50% de chance de sucesso
      const dano = this.calcularDano();
      alvo.receberDano(dano);
      console.log(`${this.nome} atacou ${alvo.getNome()} causando ${dano} de dano.`);
    } else {
      console.log(`${this.nome} errou o ataque!`);
    }
  }

  public receberDano(dano: number): void {
    this.vida -= dano;
    if (this.vida <= 0) {
      console.log(`${this.nome} foi derrotado!`);
      this.vida = 0;
    }
  }

  public equiparArma(arma: Arma): void {
    this.arma = arma;
    console.log(`${this.nome} equipou a arma ${arma.getNome()}.`);
  }

  private calcularDano(): number {
    return this.forca + (this.arma ? this.arma.getDano() : 0);
  }
}
