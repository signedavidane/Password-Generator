const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generatePassword() {
    passOne.innerText = ""; // returns back to the undeclared state. Try and see how it turns out with out this line. 
    passTwo.innerText = "";
    for (let i = 0; i <= 15; i++) {
        let randomIndexOne = Math.floor( Math.random() * characters.length )
        let randomIndexTwo = Math.floor( Math.random() * characters.length )
        passOne.innerText += characters[randomIndexOne]
        passTwo.innerText += characters[randomIndexTwo]
    }
}




