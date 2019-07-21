let count = 1;
let headline = document.getElementById("userMessage");
let inputName = document.getElementById("loginName");
let password = document.getElementById("loginPW");

function changeHeader() {
    let headline = document.createElement('P');
    headline.innerHTML = "This is a Text";
    document.body.appendChild(headline)
}

function helloMessage() {
    let okayButton = document.getElementById("okay");
    console.log('Hello ' + count++);
    // password.type = "text";
    console.log(password.value);
    headline.innerHTML = 'Ich will einen Hund';
}

function showPW() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "password");
    x.setAttribute("value", "pswtext");
    x.setAttribute("class", "myclass")
    document.body.appendChild(x);
}