var counter = document.querySelector('.counter');
let count = 0;

function changeCounter(button) {
  if(button == plus)
  {
    count++;
  }
  else if(button == minus)
  {
    count--;
  }

  counter.innerHTML = count;
}

