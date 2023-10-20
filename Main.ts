import { Character } from "./Character";
import { Weapon } from "./Weapon";
import Prompt from "prompt-sync";
import { Status } from "./Status";
const keyboard = Prompt();

const weapon: Weapon = new Weapon();

weapon.name = keyboard("Digite o nome da arma que que ira utilizar: ");
weapon.damage = 1 + Math.round(Math.random() * 99);
weapon.element = keyboard("Digite o elemento da arma utilizada");
weapon.weight = 1 + Math.round(Math.random() * 9);
weapon.type = keyboard("Digite o tipo da arma: ");
weapon.value = weapon.damage + 10 + Math.round(Math.random() * 400);

const character: Character = new Character();
character.name = keyboard("Digite o nome do seu personagem: ");
character.class = keyboard("Digite a classe: ");
character.race = keyboard("Digite a raça");
character.intellect = 1 + Math.round(Math.random() * 9);
character.level = 1 + Math.round(Math.random() * 400);
character.life = 1_000;
character.weapon = weapon;

const character2: Character = new Character();
character2.name = "Gladimir";
character2.class = "Bardo";
character.race = "Orc";
character2.level = 41;
character2.life = 1_000;
// character2.weapon = weapon2;

console.log(character);
console.log(character2);

console.log("========Menu=======");
console.log("| 1. Entrar em batalha         |");
console.log("| 2. Explorar                  |");
console.log("| 3. Treinar ataque            |");
console.log("| 3. Treinar Treinar defesa    |");

const option: number = +keyboard("Escolha uma ação: ");

switch (option) {
  case 1:
    console.table(character);

    break;
  case 2:
    break;
  case 3:
    const hoursTraining: number = +keyboard(
      "Digite quantas horas deseja treinar: "
    );
    character.training(hoursTraining);

    break;
  case 4:
    break;

  default:
    break;
}
