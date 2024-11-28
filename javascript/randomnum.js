let userip=document.querySelector('#tex')
let sbtn=document.querySelector('#sbtn')
let prev=document.querySelector(".prev")
let rem=document.querySelector(".rem")
let par=document.querySelector(".guessingfield");
let highorlow=document.querySelector(".horl")
let p=document.createElement('p');
let gslot=[];
let playgame=true;
let gcount=0;


let rno=parseInt(Math.random()*100+1)

if(playgame)
{
    sbtn.addEventListener('click',function(e)
{
    e.preventDefault()
    let uip=parseInt((userip).value)
    validateguess(uip)
})
}
function validateguess(guess) {
    if (isNaN(guess)) {
        alert("enter a valid number");
    } else if (guess < 1) {
        displayMessage("enter guess more than 1");
    } else if (guess > 100) {
        displayMessage("enter guess less than 100");
    } else {
        gslot.push(guess);
        clearguess(guess); // Call this to handle guess input
        
        // Check if it's the 10th guess after clearing
        if (gcount >= 10) {
            displayMessage(`Game over. Random number is ${rno}`);
            endgame();
        } else {
            checkguess(guess);
        }
    }
}


function checkguess(guess)
{
    if(guess==rno)
    {
        displayMessage("You guessed right")
        endgame();
    }
    else if(guess<rno)
    {
        displayMessage("Guess is too low")
    }
    else{
        displayMessage("Guess is too high")
    }
}

function clearguess(guess)
{
    userip.value=''
    prev.innerHTML+=`${guess} `
    gcount++;
    rem.innerHTML=`remaining guesses : ${10-gcount}`
}

function displayMessage(msg)
{
highorlow.innerHTML=`${msg}`
}
function endgame()
{
userip.value='';
userip.setAttribute('disabled','')

p.classList.add('button')

p.innerHTML=`<h2 id="naya">Start new game</h2>`
playgame=false;
par.appendChild(p)
newgame();
}

function newgame()
{const btn=document.querySelector('#naya')
    btn.addEventListener('click',function(e)
{rno=parseInt(Math.random()*100+1)
    userip.value=''
    gslot=[];
    gcount=0;
    userip.removeAttribute('disabled')
    p.innerHTML=''
    prev.innerHTML='prev guesses: ';
    rem.innerHTML='<h2>remaining guesses :10</h2>';
    highorlow.innerHTML='';
    prev.setText='';
    playgame=true;
})
    
}