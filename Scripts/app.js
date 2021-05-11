//IIFE -- Immediately Invoked Function Expression
"use strict";
(function(){
    function Start() {
        let myVariable = 10;
        console.log("my number is: " + myVariable);
    }
    window.addEventListener("load", Start);
})();
