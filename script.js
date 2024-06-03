function valueComputer(){
    const comp = Math.random();
    if (comp < 0.34) return 'rock';
    if (comp >= 0.34 && comp < 0.67) return 'scissors';
    return 'paper';
}

function resultGame (comp, player) {
    if (comp == player) return 'GAME TIE';
    if (player == 'rock') return (comp == 'scissors')?'YOU WIN':'YOU LOSE';
    if (player == 'scissors') return (comp == 'paper')?'YOU WIN':'YOU LOSE';
    if (player == 'paper') return (comp == 'rock')?'YOU WIN':'YOU LOSE';
}

const valuePlayer = document.querySelectorAll('.box.down img')
const resultFinal = document.querySelector('.result h1')
const shakeLeft = document.querySelector('img.img-left')
const shakeRight = document.querySelector('img.img-right')
const playAgain = document.querySelector('a.play-again')

for (let i = 0; i<valuePlayer.length;i++){
    valuePlayer[i].addEventListener('click', ()=>{
        const newValuePlayer = valuePlayer[i].className;  
        const newValueComputer = valueComputer();
        shakeLeft.classList.toggle('shake-left');
        shakeRight.classList.toggle('shake-right');
        
        setInterval(()=>{
        shakeLeft.setAttribute('src',`img/result/${newValuePlayer}.png`);
        shakeRight.setAttribute('src',`img/result/${newValueComputer}.png`);
        shakeLeft.classList.toggle('shake-left');
        shakeRight.classList.toggle('shake-right');
        resultFinal.innerText = resultGame (newValueComputer, newValuePlayer);
        }
            ,5000);
        setInterval(()=> {
            playAgain.setAttribute('style','visibility: visible;');
        },6000);
    })
}

