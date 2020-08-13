import babel from "@babel/core";
import demobable from "./bable-demo.js";
const c = `var a = 1;var b = 2`;
console.log(babel);
const { code } = babel.transform(c, {
  plugins: [demobable],
});

console.log(code); // var b = 1
