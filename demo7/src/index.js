//  import { file, parse } from './global.js';

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

function doge(isDoge) {
  return function (target) {
    target.isDoge = isDoge;
  };
}

@doge(true)
class Dog {}

console.log(Dog.isDoge);
// true

@doge(false)
class Human {}
console.log(Human.isDoge);


function debounce(fn)
const timer = null
return function(...args){
    if(timer)clearTimeout(tiemr)
    timer = setTimeout(()=>{
        fn(...args)
    },800)
}
// false

document.body.appendChild(component());
