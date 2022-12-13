console.log("hi")
const txt = document.getElementById('txt');
console.log(txt);

const btnTranslate = document.getElementById('btn-translate');
console.log(btnTranslate);

function translate() {
    console.log('clicked')
    console.log(txt.value)
}

btnTranslate.addEventListener('click', translate);



