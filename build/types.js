'use strict';
let str = 'A string!';
let num = 1;
let bool = true;
let nums = [1, 2, 3];
// note the alternate syntax available
let strings = ['Mark', 'David', 'Peter'];
// Anything!
let whatever = {};
// nada; only seems to accept null or undefined
// makes more sense for functions w/ return vals
let voider = null;
let voiderStill = undefined;
// New types not native to js
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
;
