alert('Click mouse on board, if both x and y are even then green, if any is odd and second even then blue, if both are odd then red');

const h1 = document.querySelector('h1');

window.addEventListener('mousedown', (e) => {
  h1.textContent = `${e.clientX} - ${e.clientY}`;

  let color = ''

  if ((e.clientX % 2 === 0) && (e.clientY % 2 === 0)) {
    color = 'green';
  } else if ((e.clientX % 2 !== 0) && (e.clientY % 2 !== 0)) {
    color = 'red';
  } else {
    color = 'blue';
  }

  document.body.style.backgroundColor = color;
})