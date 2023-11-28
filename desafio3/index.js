// Escrevendo as classes de um Jogo
// Classe generica que represente um herói e suas propriedades
class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    console.log(`O ${this.type} atacou usando ${this.getAttackDescription()}`);
  }

  getAttackDescription() {
    switch (this.type) {
      case "mago":
        return "magia";
      case "guerreiro":
        return "espada";
      case "monge":
        return "artes marciais";
      case "ninja":
        return "shuriken";
    }
  }
}

const hero1 = new Hero("Mago_DIO", 1000, "mago");
const hero2 = new Hero("Guerreiro_DIO", 40, "guerreiro");
const hero3 = new Hero("Monge_DIO", 500, "monge");
const hero4 = new Hero("Ninja_DIO", 35, "ninja");
hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();
