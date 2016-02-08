'use strict';

let str: string = 'A string!';
let num: number = 1;
let bool: boolean = true;
let nums: Array<number> = [1, 2, 3];
// note the alternate syntax available
let strings: string[] = ['Mark', 'David', 'Peter'];

// Anything!
let whatever: any = {};

// nada; only seems to accept null or undefined
// makes more sense for functions w/ return vals
let voider: void = null;
let voiderStill: void = undefined;

// New types not native to js
enum Role {Employee, Manager, Admin};
