//------Taking References------------------------------>>>>>>
const txt = document.getElementById('txt');
const btnTranslate = document.getElementById('btn-translate');
const outputDiv = document.getElementById("output");
console.log(outputDiv)
//-------------------------------------------------------------------------------------


//------API----------------------------->>>>>
var serverURL= "https://api.funtranslations.com/translate/minion.json"


//----Function to get URL using UTM------------------------->>>>>
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}


//-----Function to handle Error------------------------------>>>>>
function errorHandler (error) {
    console.log("error occured", error);
    alert("something wrong with server");
}


//-----On click function [promise] to get translated output---------------->>>>>>>>>>

function translate() {
    var inputTxt = txt.value; // taking value of textarea input.
    
    //Calling server for processing:
    fetch(getTranslationURL(inputTxt)) //promise to run func. 
    .then (response => response.json()) // if promise is resolved , 1. convert server data into Json form.
    .then (json => {  //if promise is resolved , 2. show this date in output div.
        var translatedText = json.contents.translated 
        outputDiv.innerText = translatedText
    })
    .catch(errorHandler)// if promise is rejected , handle ERROR.
}

btnTranslate.addEventListener('click', translate); // on click , execute translate().


