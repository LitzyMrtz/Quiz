let button = document.querySelector(".done");

let devil = document.querySelector("#devil");
let bad =  document.querySelector("#bad");
let short =  document.querySelector("#short");

let innocent =  document.querySelector("#innocent");
let misha =  document.querySelector("#misha");
let angel = document.querySelector("#angel");

let dumby = document.querySelector("#dumby");
let squirrel =  document.querySelector("#squirrel");
let bigBro =  document.querySelector("#abandoned");

let jerk= document.querySelector("#jerk");
let moose =  document.querySelector("#moose");
let soul =  document.querySelector("#soulless");

let cool = document.querySelector("#cool");
let father = document.querySelector("#father");
let great =  document.querySelector("#great");

let dean =  document.querySelector(".image1");
let sam  = document.querySelector(".image2");
let crowley =  document.querySelector(".image4");
let castiel =  document.querySelector(".image5");
let bobby =  document.querySelector (".image3");

let devilResult = false
let badResult = false
let shortResult = false
let innocentResult = false
let mishaResult = false
let angelResult = false
let squirrelResult = false
let dumbyResult = false
let abandonedResult = false
let mooseResult = false
let jerkResult = false
let soullessResult = false
let fatherResult = false
let coolResult = false
let greatResult = false

button.addEventListener("click", function(){
    if (angelResult === true && innocentResult === true && mishaResult === true) {
        castiel.style.display = "block";
    }
});

devil.addEventListener("click", function(){
    devilResult = true
});
bad.addEventListener("click", function(){
    badResult = true
});
short.addEventListener("click", function(){
    shortResult = true
});
innocent.addEventListener("click", function(){
    innocentResult = true
});
misha.addEventListener("click", function(){
    mishaResult = true
});
angel.addEventListener("click", function(){
    angelResult = true
});
squirrel.addEventListener("click", function(){
    squirrelResult = true
});

abandoned.addEventListener("click", function(){
    abandonedResult = true
});
dumby.addEventListener("click", function(){
    dumbyResult = true
});
jerk.addEventListener("click", function(){
    jerkResult = true
});
soulless.addEventListener("click", function(){
    soullessResult = true
});
moose.addEventListener("click", function(){
    mooseResult = true
});
father.addEventListener("click", function(){
    fatherResult = true
});
cool.addEventListener("click", function(){
    coolResult = true
});
great.addEventListener("click", function(){
    greatResult = true
});
