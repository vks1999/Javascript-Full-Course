// replaceChild()

// var newElement = document.createElement("li");

// var newText = document.createTextNode("Wow New Text");

// newElement.appendChild(newText);

// var target = document.getElementById("list");

// var oldElement = target.children[1];

// console.log(oldElement);

// target.replaceChild(newElement, oldElement);


// removeChild()

var target = document.getElementById("list");

var oldElement = target.children[1];

target.removeChild(oldElement);
