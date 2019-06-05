// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
main.addEventListener('click', function(event){
  alert('I was clicked!');
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.key);
});

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

let divs = document.querySelectorAll('div');

function bubble(e) {console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}
const divs = document.querySelectorAll('div');

function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

// We covered a lot in this lesson. Feel free to edit index.html, to write code directly in the
// document (just put it between <script></script> tags), and to play around with different events.
//  It's important to practice so you can get the hang of it! You can practice adding an event listener,
// using different event triggers, and intercepting user interactions with e.preventDefault() and e.stopPropagation().
