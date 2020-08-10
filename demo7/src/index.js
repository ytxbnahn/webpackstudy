
 import { file, parse } from './globals.js';

  function component() {
    const element = document.createElement('div');

   // Lodash, now imported by this script
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());