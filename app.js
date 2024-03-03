var PI = 3.14;
PI = 42;

//Refactored version

const PI = 3.14;

//1. You can redeclare var whereas you cannot with let. And let is block level scope instead of just function level.
//2. You cannot reassign or redelcare const. It's also block level scope.
//3. You can reassign with let but not with const.
//4. A big difference between var and let/const. You can see the undefined value of the variable before it's even seen by the browser. Hoisting refers to it being lifted to the top of the scope.
