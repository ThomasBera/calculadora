let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerText === '=') {
      try {
        display.value = eval(display.value);
        display.style.color = 'green';
      } catch {
        display.value = "Error";
      }
    } else if (['+', '-', '*', '/'].includes(e.target.innerText)) {
      display.style.color = 'white';
      display.value += e.target.innerText;
    } else {
      display.style.color = 'green';
      display.value += e.target.innerText;
    }
  });
});

