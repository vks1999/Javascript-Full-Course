// DOM Traversal methods - 1 (parentNode & parentElement)

// document.getElementById("inner").parentElement.style.background = "red";
// document.getElementById("child-c").parentNode.style.background = "red";


// var a = document.getElementById("inner").parentElement;
// var a = document.getElementById("child-c").parentElement;
// var a = document.getElementById("child-c").parentNode;
// var a = document.getElementById("main").parentNode;  // It will return something.
// var a = document.getElementById("main").parentElement;  // It will return null.
// var a = document.getElementById("outer").parentElement;
// var a = document.body.parentElement;

// console.log(a);


// DOM Traversal methods - 2 (children & childNodes)

// var a = document.getElementById("outer").children;
// var a = document.getElementById("inner").children;
// var a = document.getElementById("inner").children[0];
// var a = document.getElementById("inner").children[0].innerHTML;

// document.getElementById("inner").children[0].style.background = "red";

// var a = document.getElementById("inner").childNodes;
// var a = document.getElementById("inner").childNodes[3];
// var a = document.getElementById("inner").childNodes[3].innerHTML;
// document.getElementById("inner").childNodes[3].style.background = "red";
// console.log(a);


// DOM Traversal methods - 3 (firstChild & firstElementChild, lastChild & lastElementChild)

// document.getElementById("inner").firstElementChild.style.background = "red";
// document.getElementById("outer").firstElementChild.style.background = "red";
// document.getElementById("outer").lastElementChild.style.background = "red";
// document.getElementById("inner").lastElementChild.style.background = "red";
// document.getElementById("inner").lastChild.style.background = "red";

// var a = document.getElementById("inner").firstElementChild.innerHTML;
// var a = document.getElementById("outer").firstElementChild;
// var a = document.getElementById("outer").lastElementChild;
// var a = document.getElementById("inner").lastElementChild;
// var a = document.getElementById("inner").firstChild;
// var a = document.getElementById("inner").lastChild;
// var a = document.getElementById("child-c").lastChild;

// console.log(a);


// DOM Traversal methods - 4 (nextSibling & nextElementSibling, previousSibling & previousElementSibling)

// document.getElementById("child-c").previousElementSibling.style.background = "red";
// document.getElementById("child-c").nextElementSibling.style.background = "red";
// document.getElementById("child-e").nextElementSibling.style.background = "red";  // E has no next sibling present here that's why it will return null & styling of null is not possible that's why it will throw an error.

// var a = document.getElementById("child-c").nextElementSibling;
// var a = document.getElementById("child-c").previousElementSibling.innerHTML;
// var a = document.getElementById("child-c").nextElementSibling;
// var a = document.getElementById("child-e").nextElementSibling;  // E(child-e) has no next sibling present here that's why it will return null.
// var a = document.getElementById("child-head").previousElementSibling; // inner(child-head) has no previous sibling present here that's why it will return null.

// var a = document.getElementById("child-c").previousSibling;
var a = document.getElementById("child-c").nextSibling;

console.log(a);