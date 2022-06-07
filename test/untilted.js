/*
var isPremiumUser = false;
if(isPremiumUser == true){
    console.log("Premium user")
}else{
    console.log("Poor user")
}

var myAge = 25;

if(myAge < 1){
    console.log("Ur baby");
}else if(myAge>20){
    console.log("Big boy")
}


for(var i = 0; i<10; i++){
    console.log(i);
}


function myFunction()
{
    console.log("My name idiot")
}

myFunction();
*/
var btn = document.getElementById("go-button")

function buttonClicked(){
    console.log("ButtonClicked");
   // btn.removeEventListener("click", buttonClicked);
   // document.getElementById("text").innerHTML = "Dont click it";

    var customText = document.getElementsByClassName("my-input");
    var textArea = document.getElementsByClassName("my-textarea");
    var results = document.getElementById("text");

    //console.log(customText);
    results.innerHTML = "Hello, " + customText[0].value + "<br />";
    results.innerHTML += "Message: " + textArea[0].value;

}
btn.addEventListener("click", buttonClicked);

/*
var hobbies = ["pizza", "gaming", "reading", "fucking", "programming"];
//console.log(hobbies);
//console.log("I no longer enjoy", hobbies.pop());
hobbies.push("Archery");
//hobbies.shift();
console.log(hobbies.shift());
hobbies.unshift("blacksmithing")

hobbies.forEach(function(item, index){
   console.log("I like", item ,index);

});

if(hobbies.indexOf('reading') > -1){
    console.log("I like reading")
}
if(hobbies.indexOf('sports') === -1){
}else{
    console.log("Not in array")
}
*/

/* function saySomething(phrase){
    console.log("You said: " + phrase)
} */

function getPhrase(params){
   // var l = params.phrase.length;
   var l = 0;
    if(typeof another !== "undefined")
    {
        l = params.another.length;
    }

    if(typeof another !== "undefined")
    {
        l += params.another.length;
    }

/*     function printBoth(){
        return phrase + " " + another;
    } */
    return 1;
    //return printBoth();
}
var p1 = getPhrase("This is a slightly longer sentence");
var p2 = getPhrase("This is a shorter sentence");

var computed = getPhrase({another: p2});

console.log(computed);