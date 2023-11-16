// A-A Codding World!

let counter= document.getElementById('count');
let count = 0;

function increment() {
  count += 1;
  counter.textContent = count;
}

function save() {
  let save = document.getElementById('save');
  save.textContent += count + ' - ';
  count = 0;
  counter.textContent = 0;
}

function reset() {
  count = 0;
  counter.textContent = count;
}
