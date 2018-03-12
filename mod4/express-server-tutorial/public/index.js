const button = document.querySelector('button');

const handleSubmit = (e) => {
  const text = document.querySelector('h1');
  text.innerText = 'You clicked the button';
  text.classList.add('clicked');
}

button.addEventListener('click', handleSubmit);
