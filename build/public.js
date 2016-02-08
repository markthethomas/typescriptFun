'use strict';
class Foo {
    constructor(zoo, doo) {
        this.zoo = zoo;
        this.doo = doo;
        this.blerg = zoo + doo;
    }
}
// We can specify return types!
function returnMutatedType(str) {
    return Number(str);
}
console.log(returnMutatedType('1'));
