var a = 0;
var b = 0;
var id = setInterval(anim, 50);
var id2 = setInterval(anim2, 50);

function anim() {
    a = a + 10;
    if (a == 700) {
        clearInterval(id)
    } else {
        var target = document.getElementById("test");
        // target.style.marginLeft = a + 'px';
        target.style.width = a + 'px';

    }
    // console.log(a);

}
function anim2() {
    b = b + 10;
    if (b == 700) {
        clearInterval(id2)
    } else {
        var target = document.getElementById("test2");
        // target.style.marginRight = b + 'px';
        target.style.width = b + 'px';

    }
    // console.log(a);

}