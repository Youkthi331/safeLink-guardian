document.getElementById("english").addEventListener("click", function(){

chrome.storage.local.set({lang:"english"});

alert("Language set to English");

});

document.getElementById("kannada").addEventListener("click", function(){

chrome.storage.local.set({lang:"kannada"});

alert("Language set to Kannada");

});

document.getElementById("hindi").addEventListener("click", function(){

chrome.storage.local.set({lang:"hindi"});

alert("Language set to Hindi");

});