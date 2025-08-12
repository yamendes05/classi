class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso
const heroi1 = new Heroi("Arthus", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Shen", 28, "ninja");
const heroi4 = new Heroi("Li", 40, "monge");

heroi1.atacar(); // o guerreiro atacou usando espada
heroi2.atacar(); // o mago atacou usando magia
heroi3.atacar(); // o ninja atacou usando shuriken
heroi4.atacar(); // o monge atacou usando artes marciais
