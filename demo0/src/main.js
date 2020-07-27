import {A} from './a.js' 
import B from "./b.js"
// main.js

console.log(A)
import('./c.js').then(test => {
    console.log(test)
})
B()
