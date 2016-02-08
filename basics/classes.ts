'use strict';

class MonsterClass {
  // We can't do `this.name: string = name;`, so we do:
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // Declare a method on the class
  attack(): void {
    console.log(`${this.name} is attacking someone!`);
  }
}

const Godzilla = new MonsterClass('Godzilla');
Godzilla.attack();

interface Monster {
    create: any;
}

// We could also do this with more of an object factory approach
// note the optional flag on the options param
const Monster = {
  // open question: what would we do when we are using a factory method or something
  // that has dynamically-assigned methods on it?
  create(name: string, powers: Array<any>, options?: any) {
    let newMonster = {};
    let o = options || {};
    o.hp = 100;

    // dynamically add new powers to our monster
    for (let power of powers) {
      newMonster[power] = () => {
        console.log(`I am using my power, ${power}`);
      };
    }
    return newMonster;
  }
};

let newGodzilla = Monster.create('Godzilla', ['punch', 'kick', 'crush', 'flames']);

console.log(newGodzilla)
// newGodzilla.punch();
