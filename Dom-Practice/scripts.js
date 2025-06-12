const btn= document.querySelector('button');
const mylist= document.querySelector('ul');
const handleClick = ()=>{
  let myinput= document.querySelector('input').value;
  if (myinput){
    const task = document.createElement('li')
    task.innerHTML=myinput;

    task.addEventListener('contextmenu',()=>task.setAttribute('class','complited'))
   
    document.querySelector('input').value=''
    mylist.appendChild(task);
  }

}
btn.addEventListener('click',handleClick);

