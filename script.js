'use strict';


let actualValue = Math.trunc(Math.random() * 20) + 1
console.log(actualValue)

let score = 20
let highScore = 0

const buttonClickHandler = () => {
    let getVal = Number(document.querySelector('.guess').value)

    if (getVal) {

    
        if (getVal < actualValue) {
            if(score>1){
                if (getVal < actualValue - 5) {
                    document.querySelector('.message').textContent = "Too Low"
                    score--
                    document.querySelector('.score').textContent = score
    
    
                } else {
                    document.querySelector('.message').textContent = "Low"
                    score--
    
                    document.querySelector('.score').textContent = score
    
                }
            }else{
                document.querySelector('.message').textContent = "You lost the game"
                score--
                document.querySelector('.score').textContent = score    

            }
        } else if (getVal > actualValue) {
            if(score>1){
                if (getVal > actualValue + 5) {
                    document.querySelector('.message').textContent = "Too Hight"
                    score--
                    document.querySelector('.score').textContent = score 
    
                } else {
                    document.querySelector('.message').textContent = "High"
                    score--
                    document.querySelector('.score').textContent = score    
                }
            }else{
                score--
                document.querySelector('.score').textContent = score    
                document.querySelector('.message').textContent = "You lost the game"

            }
        } else {
            document.querySelector('.message').textContent = "You Win"
            document.querySelector('.number').textContent = actualValue
            document.querySelector(".check").disabled = true;
            document.querySelector('body').style.backgroundColor = 'green'
            if(score>highScore){
                highScore = score
                document.querySelector('.highscore').textContent = highScore    


            }

        }

    } else {
        document.querySelector('.message').textContent = "Please Enter the value"


    }

}

const playAgain = ()=>{
    score = 20
    document.querySelector('.score').textContent = score    
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ""
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = "Start guessing..."
    actualValue = Math.trunc(Math.random() * 20) + 1
    document.querySelector(".check").disabled = false;

    console.log(actualValue)


}
document.querySelector(".check").addEventListener('click', buttonClickHandler)
document.querySelector('.again').addEventListener('click',playAgain)