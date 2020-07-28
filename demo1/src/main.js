import { a } from "./a.js";
import "./style.css";
import Icon from  "./favicon.ico"
console.log(a);

function component() {
  const element = document.createElement("div");

  // lodash，现在由此脚本导入
  element.innerHTML = "webpack";
  element.classList.add("hello");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
