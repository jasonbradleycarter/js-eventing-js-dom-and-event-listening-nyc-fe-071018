const main = document.querySelector('#main');
const paragraph = document.querySelector('p');

main.addEventListener('click', (event) => {
  alert('You clicked me!');
});

paragraph.addEventListener('click', (event) => {
  alert('You clicked the p!!!');
  paragraph.style.backgroundColor = 'yellow';
});

