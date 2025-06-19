cards= document.getElementsByClassName('card')
start_btn= document.getElementById('start-game')
start_btn.addEventListener('click', ()=>alert('hello'))
imagelist= [
  {'image':'images/king.PNG','count':0},
  {'image':'images/queen.PNG','count':0},
  {'image':'images/jack.PNG','count':0},
  {'image':'images/a.PNG','count':0},
  {'image':'images/3.PNG','count':0},
  {'image':'images/tortie.PNG','count':0},
  {'image':'images/7.PNG','count':0},
  {'image':'images/joker.PNG','count':0}
]
function pickRandomImage(){
  n=Math.floor(Math.random()*8)
  card= imagelist[n]
  if(card.count < 2){
    card.count++
    picked_images.push(card)
    return card
}
}
assignedCards=[]
foundCards=[]
picked_images=[]
Array_cards=Array.from(cards)
Array_cards.forEach(card => {
  card.addEventListener('click',()=>{
    dones = document.getElementsByClassName('done')
    if (card in dones){
      return 
    }
    picked=pickRandomImage()
    image=picked.image
    card.style.backgroundImage= `url('${image}')`
    card.classList.add('done')
  })
});