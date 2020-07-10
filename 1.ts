console.log("Hello world");
enum CharacterType { Warrior, Mage, Healer };

class Character {
  constructor(
    private name: string,
    private age: number,
    private type: CharacterType
  ) {}
}