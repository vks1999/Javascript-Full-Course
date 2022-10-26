var id = setTimeout(anim, 5000);
var id2 = setTimeout(anim2, 5000);

function anim() {
    var target = document.getElementById("test");
    target.style.width = "500px";
    // console.log("Hello");
}
function anim2() {
    var target = document.getElementById("test2");
    target.style.width = "500px";
    // console.log("Hello");
}

function stopAnimation() {
    clearTimeout(id);
}
function stopAnimation2() {
    clearTimeout(id2);
}