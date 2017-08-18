var code = [];
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
function konami () {
    alert ("KONAMI");
}

function same_tab(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (var i = 0; i < b.length && i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

document.body.addEventListener("keydown", function (e) {
    e = e || window.event;
    code.push(e.keyCode);
    console.log(code + "\n" + konamiCode);
    if (same_tab(code, konamiCode)) {
        code = [];
        konami ();
    }
    if (code.length === 1) {
        setInterval(function () {
            code = [];
        }, 2500)
    }
});
