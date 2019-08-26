const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998', 'purple', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 0.6)', '#456786', '#gh45kf', '0e0e0e'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length)
  bodyBcg.style.backgroundColor = colors[random]
}