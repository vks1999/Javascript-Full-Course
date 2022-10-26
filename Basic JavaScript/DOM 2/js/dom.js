var element;
// DOM - 1

// element = document.all[6];
// element = document.head;
// element = document.title;
// element = document.body;
// element = document.links[0];
// element = document.images;
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.domain;
// element = document.baseURI;
// element = document.getElementById("header");
// element = document.getElementById("footer");
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list")[0];
// element = document.getElementsByClassName("list")[1];
// element = document.getElementsByTagName("ul");

// DOM - 2

// element = document.getElementById("header").innerText;
// element = document.getElementById("content").innerText;
// element = document.getElementById("header").innerHTML;
// element = document.getElementById("header").getAttribute("class");
// element = document.getElementById("header").getAttribute("onClick");
// element = document.getElementById("header").getAttributeNode("style");
// element = document.getElementById("header").getAttributeNode("style").value;
// element = document.getElementById("header").attributes; // It will returns object
// element = document.getElementById("header").attributes[2].value;
// element = document.getElementById("header").attributes[2].name;

// element = document.getElementById("header").innerHTML;

// console.log(element);

// Changing or setting value

// document.getElementById("header").innerHTML = "<h1>Wow</h1>"

// element = document.getElementById("header").innerHTML;

// Setting Attribute

// document.getElementById("header").setAttribute("class", "xyz");
// document.getElementById("header").setAttribute("style", "border:10px dotted yellow");
// document.getElementById("header").attributes[1].value = "xyz";
// document.getElementById("header").removeAttribute("style");
// document.getElementById("header").removeAttribute("class");

// element = document.getElementById("header").getAttribute("class");

// DOM - 3(Query Selector)

// document.querySelector("#header").innerHTML = "<h1>Wow You Are Awesome</h1>";
// element = document.querySelector("#header").getAttribute("class");
// element = document.querySelector(".list");
// element = document.getElementsByClassName("list");

// DOM (Query Selector All)

// element = document.querySelectorAll(".list")[1].innerHTML;
// element = document.querySelectorAll("ul")[0].innerHTML;
// element = document.querySelectorAll("#header h1")[1].innerHTML;


// DOM - 4(CSS Styling Methods)

// Style Methods

// element = document.querySelector("#header").style.border;
// element = document.querySelector("#header").style.color;

// document.querySelector("#header").style.backgroundColor = "tan";
// document.querySelector("#header").style.color = "blue";
// element = document.querySelector("#header").style.color;

// className methods

// document.querySelector("#header").className = "abc xyz";

// element = document.querySelector("#header").className;

// classList methods

// document.querySelector("#header").classList.remove("xyz");

// element = document.querySelector("#header").classList;


// DOM - 4(addEventListener())

// document.getElementById("header").onclick = abc;
// document.getElementById("header").onmouseleave = abc;
// document.getElementById("header").onmouseout = abc;

// addEventListener Method

// document.getElementById("header").addEventListener("mouseenter", abc);
// document.getElementById("header").addEventListener("click", abc);
// document.getElementById("header").addEventListener("click", function () {
//     // document.getElementById("header").style.border = "10px solid red";   // or we can write
//     this.style.border = "10px solid red";
// });

/*function abc() {
    document.getElementById("header").style.background = "yellow";
}*/

// console.log(element);


// document.getElementById("header").addEventListener("mouseleave", abc);
// document.getElementById("header").addEventListener('click', xyz);

// function xyz() {
//     document.getElementById("header").removeEventListener('mouseleave', abc);
// }

// DOM - 5(classList method)

document.getElementById("header").addEventListener("click", abc);

function abc() {
    // document.getElementById("header").classList.add("xyz", "efg");
    // document.getElementById("header").classList.toggle("xyz");
    // document.getElementById("header").classList.remove("xyz");
    // document.getElementById("header").classList.length;
    // var a = document.getElementById("header").classList.length;
    // var a = document.getElementById("header").classList.length;
    // var a = document.getElementById("header").classList.item(0);
    var a = document.getElementById("header").classList.contains("first");
    console.log(a);
}


// 