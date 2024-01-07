var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);

window.onscroll = function () { changeLogo() };
function changeLogo() {
    var logo = document.getElementById("logo");
    if (document.documentElement.scrollTop) {
        logo.src = "media/logo.png";
        logo.style.width = "30px";
    }
    else {
        logo.src = "media/Rolls-Royce_Motor_Cars_logo white.png";
        logo.style.width = "20px";
    }
}

function openMenu() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("menu").style.visibility = "hidden";
}

function closeMenu() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("menu").style.visibility = "visible";
}

function openSubList() {
    t = document.getElementsByClassName("list");
    for (i = 0; i < t.length; i++) {
        t[i].style.display = "block";
    }
}
function hideSubList() {
    t = document.getElementsByClassName("list");
    for (i = 0; i < t.length; i++) {
        t[i].style.display = "none";
    }
}

function next(t) {
    var elm = t.parentElement.parentElement.children[1].children[0];
    var item = elm.getElementsByClassName("item");
    elm.append(item[0]);
}
function prev(t) {
    var elm = t.parentElement.parentElement.children[1].children[0];
    var item = elm.getElementsByClassName("item");
    elm.prepend(item[item.length - 1]);
}