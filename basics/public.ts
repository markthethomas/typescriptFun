'use strict';

class Foo {
  // unlike regular ES6 classes, you have to declare a type for properties on the class
  // before you refer to them in the constructor
  blerg: string;
  constructor(public zoo: string, public doo: string) {
    this.blerg = zoo + doo;
  }
}

// We can specify return types!
function returnMutatedType(str: string): number {
  return Number(str);
}

console.log(returnMutatedType('1'));
