class Dude {
  name: 'bob';
  constructor(name) {
    this.name = this.name || name;
  }
  identfty() {
    console.log(this.name);
  }
}

interface Person {
  name: string;
}
