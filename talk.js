//------Taking References----------------------------------------------------->>>>>>>>>
const txt = document.getElementById('txt');
const btnTranslate = document.getElementById('btn-translate');
const outputDiv = document.getElementById("output");
console.log(outputDiv)
//-------------------------------------------------------------------------------------


//------API-------------------------------------------------------------------->>>>>>>>>>
var serverURL= "https://api.funtranslations.com/translate/minion.json"

//-------------------------------------------------------------------------------------

//----Function for 
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler (error) {
    console.log("error occured", error);
    alert("something wrong with server");
}

function translate() {
    // outputDiv.innerText = txt.value  --> not working
    var inputTxt = txt.value; 
    
    //Calling server for processing:
    fetch(getTranslationURL(inputTxt))
    .then (response => response.json())
    .then (json => {
        var translatedText = json.contents.translated 
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
    // .then (json => console.log(json))
}

btnTranslate.addEventListener('click', translate);



// var mockURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


