const keys={
  'w':{'sound':'sounds/crash.mp3','color':'rgb(177, 167, 167)','scale':'scale(0.9)'},
  'a':{'sound':'sounds/kick-bass.mp3','color':'rgb(88, 69, 69)','scale':'scale(1.1)'},
  's':{'sound':'sounds/snare.mp3','color':'rgb(182, 156, 156)','scale':'scale(0.8)'},
  'd':{'sound':'sounds/tom-1.mp3','color':'rgb(189, 178, 178)','scale':'scale(1.2)'},
  'j':{'sound':'sounds/tom-2.mp3','color':'rgb(168, 160, 160)','scale':'scale(1.1.5)'},
  'k':{'sound':'sounds/tom-3.mp3','color':'rgb(172, 165, 165)','scale':'scale(0.95)'},
  'l':{'sound':'sounds/tom-4.mp3','color':'rgb(80, 75, 75)','scale':'scale(1.05)'}
};

document.addEventListener('keypress',(e)=>{
  k=e.key.toLowerCase()
  if(k in keys){
      const drum=document.getElementById('drum');
      drum.classList.add('clicked')
      drum.style.backgroundColor=`${keys[k].color}`
      drum.style.transform=`${keys[k].scale}`
      drum.innerHTML=`
      <div class='sound'>
      <audio controls autoplay>
          <source src=${keys[k].sound} type="audio/mpeg">
      </audio>
      </div>`    
  }
})
