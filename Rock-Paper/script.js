  "use strict";
  
// alert("Hello W!");

let scissors = "ножиці";
let rock = "камінь";
let paper = "папір";


let player1 = prompt('Ти гравець №1. Скопіюй в поле: камінь, ножиці або папір', '');
let player2 = prompt('Ти гравець №2. Скопіюй в поле: камінь, ножиці або папір', '');

if(player1 == scissors && player2 == scissors || player1 == rock && player2 == rock || player1 == paper && player2 == paper){
alert('Нічия. Давай ще раз зіграємо!');
} else if(player1 == scissors && player2 == rock){
    alert('Гравець №2 виграв!');
}else if(player1 == rock && player2 == scissors){
    alert('Гравець №1 виграв!');
}else if(player1 == rock && player2 == paper || player1 == paper && player2 == rock){
    alert('Знову нічия. Камінь не перемагає папір!');
}else if(player1 == scissors && player2 == paper){
    alert('Гравець №1 виграв!');
}else if(player1 == paper && player2 == scissors){
    alert('Гравець №2 виграв!');
}else{
    alert("Мені сподобалось, як писали \'Ти що, Дурачок?\' ");
}


