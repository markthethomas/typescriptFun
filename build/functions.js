'use strict';
// We can annotate args
function foo(arg) {
    console.log(arg);
}
// Annotate the return type
function returnType(thing) {
    return {};
}
function returnNumber(foo) {
    return 1;
}
function returnString(str) {
    return str;
}
let state;
function sideEffectsOnly() {
    state = true;
}
