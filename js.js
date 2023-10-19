let score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  loses:0,
  ties:0,
};

document.querySelector('.js-move').innerHTML=JSON.parse(localStorage.getItem('on'));
document.querySelector('.js-result').innerHTML=JSON.parse(localStorage.getItem('one'));

SCORE();



function result(playerM){

  const c=cmove();
  let r=''
  if (playerM==='stone')
  {
    if (c==='stone')
    {
      r='TIE'
    }
    else if(c==='paper')
    {
      r='YOU LOSE';
    }
    else if(c==='scissor')
    {
      r='YOU WON';
    }
  
    
  }

  else if(playerM==='paper')
  {
    if (c==='stone')
    {
      r='YOU WON';
    }
    else if(c==='paper')
    {
      r='TIE';
    }
    else if(c==='scissor')
    {
      r='YOU LOSE';
    }
    
  }

  else if(playerM==='scissor')
  {
    if(c==='scissor')
    {
      r='TIE';
    }
    else if(c==='paper')
    {
      r='YOU WON';
    }
    else if(c==='stone')
    {
      r='YOU LOSE';
    }
    
  }
if (r==='YOU WON'){
  score.wins+=1;
}
else if(r==='YOU LOSE'){
  score.loses+=1;
  
}
else if(r==='TIE'){
  score.ties+=1;
}

let ha=document.querySelector('.js-move')
  .innerHTML=`YOUR MOVE:<img  src="images/${playerM}.png"> VS <img src="images/${c}.png">  :COMPUTER MOVE`;

let ui=document.querySelector('.js-result')
.innerHTML=r;

localStorage.setItem('one',JSON.stringify(ui));
localStorage.setItem('score',JSON.stringify(score));
localStorage.setItem('on',JSON.stringify(ha));


SCORE();

}

function SCORE(){
  document.querySelector('.js-score')
  .innerHTML = `WINS : ${score.wins}          LOSES : ${score.loses}          TIE : ${score.ties}`;
}
function ons(){

}




function cmove(){
  const random=Math.random();
  let cm='';
  if(random>0 && random <1/3)
  {
    cm='stone';
  }
  else if(random>1/3 && random<2/3)
  {
    cm='paper';
  }
  else if(random>2/3 && random<1)
  {
    cm='scissor';
  }
  return cm;
}
