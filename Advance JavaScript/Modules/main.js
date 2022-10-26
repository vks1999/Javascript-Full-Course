/*// import { message, user as us, test } from "./library.js";
import * as vikash from "./library.js";


// console.log(message);
console.log(vikash.message);
// user();
// user("Vikash");
// console.log(us("Vikash"));
console.log(vikash.user("Vikash"));
// let a = new test();
let a = new vikash.test();

// document.body.innerHTML = message;*/

// import { default as vikash } from "./library.js";
// import vikash from "./library.js";
// import { message, user } from "./library.js";

// vikash();
// console.log(message);
// console.log(user("Vikash Singh"));

import { user } from "./bridge.js";

console.log(user());
