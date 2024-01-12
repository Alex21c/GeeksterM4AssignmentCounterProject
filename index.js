'use strict';
let num =0;
let elementNumber = document.querySelector('#number');

// Attaching event listener
  document.querySelector('#ulHavingButtons').addEventListener('click', (event)=>controller(event));

// MVC Architecture
function model(operation){
  if(operation === '+'){
    num++;
  }else if(operation === '-'){
    num--;
  }else if(operation === 'Reset'){
    num =0;
  }
}

function view(){
  elementNumber.innerText = num;
  elementNumber.style.color= generateRandomColor();
}

function controller(event){
  let operation = event.target.innerText;
  // Update Model
    if(event.target.nodeName === 'BUTTON'){
      model(operation);
    }
  // Refresh View
    view();
}

// helper functions
function generateRandomColor(){
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  return `rgb(${red},${green},${blue})`;
}