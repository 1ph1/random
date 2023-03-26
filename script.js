let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(randomNumber);
let answer = document.querySelector(".random_number")

let score = 0;
let finalScore = document.querySelector(".best_score_span");

let lifes = 10;
let lifesHtml = document.querySelector(".lifes_span");

let hint = document.querySelector(".hint")

let buttonDis1 = document.querySelector(".check")
let buttonDis2 = document.querySelector(".again")
buttonDis1.disabled=false

function checkValue() {
    let playerAnswer = document.querySelector(".answer")
    let pattern = /^(0|[1-9]\d*)$/.test(playerAnswer.value)
    if(pattern == false){
        hint.innerHTML=`ВВЕДИТЕ ЧИСЛО ОТ 1 ДО 100`
    }else{
        if(playerAnswer.value > 100){
            hint.innerHTML=`ВВЕДЕННОЕ ЧИСЛО ДОЛЖНО БЫТЬ МЕНЬШЕ 100`
        }else if(playerAnswer.value < 1){
            hint.innerHTML=`ВВЕДЕННОЕ ЧИСЛО ДОЛЖНО БЫТЬ БОЛЬШЕ 1`
        }else{
            lifesHtml.innerHTML = lifes - 1
            --lifes
            if(playerAnswer.value == randomNumber){
                buttonDis1.disabled=true
                hint.innerHTML=`ВЫ ПОБЕДИЛИ!`
                answer.innerHTML = randomNumber
                if(finalScore.innerHTML=="0"){
                    finalScore.innerHTML=10-lifes
                }else if(finalScore>10-lifes){
                    let checkLifes = 10-lifes
                    finalScore.innerHTML=checkLifes + 1
                }
                buttonDis2.disabled=false
            }else if(playerAnswer.value > randomNumber){
                hint.innerHTML=`ЗАГАДАННОЕ ЧИСЛО МЕНЬШЕ ЧЕМ ЧИСЛО ИГРОКА`
                if(lifes==0){
                    alert("Игра окончена")
                    buttonDis1.disabled=true
                    buttonDis2.disabled=false
                }
            }else if(playerAnswer.value < randomNumber){
                hint.innerHTML=`ЗАГАДАННОЕ ЧИСЛО БОЛЬШЕ ЧЕМ ЧИСЛО ИГРОКА`
                if(lifes==0){
                    alert("Игра окончена")
                    buttonDis1.disabled=true
                    buttonDis2.disabled=false
                }
            }
            
        }
    }
}

function playAgain(){
    lifes=10
    lifesHtml.innerHTML = lifes
    buttonDis1.disabled=false
    randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    answer.innerHTML = "?"
    buttonDis2.disabled=true
}
