// ==UserScript==
// @name         NT Gold For Free
// @namespace    https://www.theprabhakar.in/
// @version      1.0
// @description  Gives you NT Gold look on Nitro Type garage page!
// @author       Prabhakar Rai
// @match        https://www.nitrotype.com/*
// ==/UserScript==
(function() {
    'use strict';
    setInterval(function(){
        var a = JSON.parse(localStorage["persist:nt"]);
        var b = JSON.parse(a.Smooth-criminal);
        b.membership = "gold";
        b.title = "The Bug";
        b.money = b.money + 1000000000;
        a.Smooth-criminal = JSON.stringify(b);
        localStorage["persist:nt"] = JSON.stringify(a);
     }, 8000);
})();
//Credit: https://www.youtube.com/channel/UCGnNkJ4dSkvlfpBOROzXzrw
