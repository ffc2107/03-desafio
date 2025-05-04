// Criei uma classe
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    
    //Criei um método atacar com switch case
    atacar() {
      let ataque = "";
      switch (this.tipo) {
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
          ataque = "ataque inexistente";
      }

      //Saída
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criei um objeto 
  const mago = new Heroi("Hermes", 49, "monge");
  // Saída
  mago.atacar(); 
  
  

  