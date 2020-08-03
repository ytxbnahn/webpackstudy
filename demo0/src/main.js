import {A} from './a.js' 
import B from "./b.js"
const C  = require('./c.js')
// main.js

console.log(A)
import('./c.js').then(test => {
    console.log(test)
})
B()

console.log(C)
