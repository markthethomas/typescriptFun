'use strict';

// We can annotate args
function foo(arg: string) {
  console.log(arg);
}

// Annotate the return type
function returnType(thing: string): any {
  return {};
}

function returnNumber(foo: number): number {
  return 1;
}

function returnString(str: string): string {
  return str;
}

let state;
function sideEffectsOnly(): void {
  state = true;
}
