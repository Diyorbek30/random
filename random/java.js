let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')
let text = document.querySelector('.text')
let count = 0
one.onclick = () => {
  count += 1;
  text.innerHTML = count
  if (count > 0) {
    text.style.color = 'green'
  }
}
three.onclick = () => {
  count -= 1
  text.innerHTML = count
  if (count < 0) {
    text.style.color = 'red'
  }
}
two.onclick = () => {
    count = 0
    text.innerHTML = count
  }

four.onclick = () => {

text.innerHTML = Math.floor(Math.random() * count) + 1
}
