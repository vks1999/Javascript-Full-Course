// insertAdjacentElement

// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text");

// newElement.appendChild(newText);

// var target = document.getElementById("test");

// target.insertAdjacentElement("beforebegin", newElement);
// target.insertAdjacentElement("afterbegin", newElement);
// target.insertAdjacentElement("beforeend", newElement);
// target.insertAdjacentElement("afterend", newElement);


// insertAdjacentHTML

// var target = document.getElementById("test");

// var newElement = "<h2>This is heading</h2>";

// target.insertAdjacentHTML("afterbegin", newElement);
// target.insertAdjacentHTML("afterend", newElement);
// target.insertAdjacentHTML("beforeend", newElement);


// insertAdjacentText

var target = document.getElementById("test");

var newtext = "This is heading";

// target.insertAdjacentText("beforeend", newtext);
// target.insertAdjacentText("afterend", newtext);
target.insertAdjacentText("beforebegin", newtext);



