
//hey browser(query), fetch me an element with so-and-so id(selector)
//this is called referencing the element in JS
var btnclick= document.querySelector(".button");
var txtInput2= document.querySelector("#txtInput1");
console.log(txtInput2);
//var output= document.querySelector(".output")

//hey browser, on a click, this is what u have to do
btnclick= addEventListener("click",clickHandler);
//console.log(txtInput)    (wrong coz this doesnt execute on clicking- clickhandler does) 

function clickHandler()
{
    console.log("clicked");
    //console.log("input",txtInput1);
}