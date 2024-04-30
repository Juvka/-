'use strict';

let random = Math.floor(Math.random() * 20 + 1) * 1;
let score = 20;
let bestScore = 0;

console.log(random)

document.querySelector('.check').addEventListener('click' , click);
document.querySelector('.again').addEventListener('click' , restart);

function click() {
    const resultInput = Number(document.querySelector('.number-input').value);

    // Пользователь нарушил правила | The user has violated the rules
    if(resultInput == '' || resultInput > 20) {
        document.querySelector('.guess-message').textContent = 'Внимательно прочтите условие!';

    // Пользователь выиграл | user won
    } else if (resultInput === random) {
        document.querySelector('.guess-message').textContent = 'Вы угадали число!!!';
        document.querySelector('.guess-message').style.fontSize = '21px';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('h1').textContent = 'Поздравляем! Вы угадали число'
        document.querySelector('.question').style.width = '50rem'
        document.querySelector('.question').textContent = random;
            if(score >= bestScore) {
                bestScore = score
                document.querySelector('.bestScore').textContent = bestScore;
                    if (bestScore === 20) {
                        document.querySelector('.bestScore').style.color = 'rgb(255, 89, 0)';
                        document.querySelector('.bestScore').style.fontSize = '21px';
                    }
            }
    }   

    else if (resultInput !== random) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = resultInput > random ? 'Слишком много!' : 'Слишком мало';
            score--
            document.querySelector('.score').textContent = score;  
        } else {
            document.querySelector('.guess-message').textContent = 'Игра окончена!'; 
            document.querySelector('.score').textContent = 0;
            document.querySelector('h1').textContent = 'Попытки закончились :(';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
}

function restart() {
    random = Math.floor(Math.random() * 20 + 1) * 1;
    score = 20;

    document.querySelector('.guess-message').textContent = 'Начни угадывать';
    document.querySelector('.score').textContent = score;
    document.querySelector('h1').textContent = 'Угадай число!';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.number-input').value = '';

    console.log(`New score - ${random}`)
    }