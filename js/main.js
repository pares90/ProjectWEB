// Jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true
var noNewFriends = ['Parnas', 'Yorrie', 'Jeftha'];
var greeting

// Function gevuld met variabele noNewFriends
function greet(name){
    
    greeting = 'Hallo ' + name.toLowerCase() + '<br/><br/>';
    return greeting;
    
};

// Function print naar HTML
function printToPage(print){
    document.querySelector('h1').innerHTML += print;
}

// Uitvoeren functions
greet(noNewFriends[0]);
printToPage(greeting);

greet(noNewFriends[1]);
printToPage(greeting);

greet(noNewFriends[2]);
printToPage(greeting);