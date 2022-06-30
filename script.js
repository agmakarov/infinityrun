var character = document.getElementById("character");
var block = document.getElementById("block");
var clicks = 0;
var text = document.getElementById("text");

var result = prompt ("Введите уровень сложности от 1 до 4");
if (result < 1 || result > 4){
    alert("Введи значение 1-4");
    window.location.reload();
}
switch(result){
    case "1":
        block.classList.add("animation3s");
    case "2":
        block.classList.add("animation2s");
    case "3":
        block.classList.add("animation1s");   
    case "4":
        block.classList.add("animation750ms");
}

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate")
        clicks += 1;
        text.textContent = ("Ваш результат: "+clicks);
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        if(!alert("Вы проиграли! Препятствий пройдено: " +(clicks))){window.location.reload();}
        var click = 0;
    }
},10);
