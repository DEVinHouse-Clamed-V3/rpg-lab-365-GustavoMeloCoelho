export class Arma {
    private readonly nome: string;
    private readonly descricao: string;
    private _dano: number = 0; // Atributo privado que armazena o dano
  
    constructor(nome: string, dano: number, descricao: string) {
      this.nome = nome;
      this.descricao = descricao;
      this.setDano(dano); // Usamos o setter para validar e atribuir o dano corretamente
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getDescricao(): string {
      return this.descricao;
    }
  
    public getDano(): number {
      return this._dano; // Retorna o valor armazenado no atributo privado
    }
  
    public setDano(dano: number): void {
      if (dano < 0) {
        throw new Error("O dano não pode ser negativo."); // Validação de regra de negócio
      }
      this._dano = dano; // Atualiza o atributo privado
    }
  }
  