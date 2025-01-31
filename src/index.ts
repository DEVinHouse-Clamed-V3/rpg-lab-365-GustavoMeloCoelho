import { Arma } from "./models/Arma";
import { Personagem } from "./models/Personagem";
import { Inimigo } from "./models/Inimigo";
import { Chefe } from "./models/Chefe";


// Criando 3 armas
const espadaLonga = new Arma("Espada Longa", 20, "Uma espada de aço afiada.");
const machadoGuerra = new Arma("Machado de Guerra", 30, "Um machado pesado usado por guerreiros brutais.");
const arcoLongo = new Arma("Arco Longo", 15, "Um arco feito de madeira resistente, ideal para ataques à distância.");

// Criando o personagem principal
const heroi = new Personagem("Arthur", 100, 25);
heroi.equiparArma(espadaLonga);

console.log(`${heroi.getNome()} entrou na batalha com uma ${heroi.getArma()?.getNome()}!`);

// Criando 5 inimigos
const inimigo1 = new Inimigo("Goblin", 50, 10);
const inimigo2 = new Inimigo("Orc", 80, 20);
const inimigo3 = new Inimigo("Esqueleto", 60, 15);
const inimigo4 = new Inimigo("Mago Negro", 70, 18);
const inimigo5 = new Inimigo("Dragão Bebê", 120, 35);

inimigo1.equiparArma(machadoGuerra);
inimigo3.equiparArma(arcoLongo);

const inimigos = [inimigo1, inimigo2, inimigo3, inimigo4, inimigo5];

// Criando o chefe
const chefeFinal = new Chefe("Dragão Ancião", 300, 50);
console.log(`${chefeFinal.getNome()} apareceu! Prepare-se para a luta!`);

// Simulação de combate contra o chefe
while (chefeFinal.getVida() > 0 && heroi.getVida() > 0) {
  heroi.atacar(chefeFinal);
  
  if (chefeFinal.getVida() > 0) {
    chefeFinal.atacar(heroi);
  } else {
    chefeFinal.verificarUltimaAcao(heroi);
  }

  console.log("");
}

// Exibindo o estado final do herói
console.log(`\nApós a batalha, ${heroi.getNome()} tem ${heroi.getVida()} de vida restante.`);

console.log("Os inimigos apareceram!");
inimigos.forEach(inimigo => {
  console.log(`${inimigo.getNome()} com ${inimigo.getVida()} de vida e força ${inimigo.getForca()}`);
});

// Simulação de combate
console.log("\nO combate começou!");

inimigos.forEach(inimigo => {
  // O herói ataca primeiro
  heroi.atacar(inimigo);
  
  // Se o inimigo ainda estiver vivo, ele ataca de volta
  if (inimigo.getVida() > 0) {
    inimigo.atacar(heroi);
  }

  console.log(""); // Linha em branco para organização
});

// Exibindo o estado final do herói
console.log(`\nApós a batalha, ${heroi.getNome()} tem ${heroi.getVida()} de vida restante.`);
