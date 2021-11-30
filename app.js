//what is an API?
//API- what u already know-CLI/GUI is user talking to a program usinf command line/graphical interface
//API- if u want to program an app, u use APIs. many apps can do things on their own, but u want a diff output. when u are talking to the program as a dev, u are using APIs 
//browser has API, node has API


//hey browser(query), fetch me an element with so-and-so id(selector)
//this is called referencing the element in JS
//how are u talking to the browser- using 'dcoument API'. APIs are a way of talking to browser
var btnclick= document.querySelector(".button");
var txtInput2= document.querySelector(".txtInput1");
console.log(txtInput2);
var outputDiv= document.querySelector(".output")
var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error)
{
    alert("An error occured! Please try again later");
    console.log(error);
}

//hey browser, on a click, this is what u have to do
btnclick.addEventListener("click",clickHandler);
//console.log(txtInput)    (wrong coz this doesnt execute on clicking- clickhandler does) 

function clickHandler()
{
    console.log("clicked");
    console.log("input "+txtInput2.value);

    var inputText=txtInput2.value;
    //outputDiv.innerText=txtInput2.value;
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{var translated=json.contents.translated;
                outputDiv.innerText= translated})
    .catch(errorHandler)
    //outputDiv.innerText=json.contents.translated;
};