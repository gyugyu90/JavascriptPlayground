import { cube, foo, graph } from "./named-export.js";
import cube2 from './default-export.js'; // 이름 아무렇게나 import 가능

graph.options = {
  color: 'blue',
  thickness: '3px'
}

graph.draw();
console.log(cube(3));
console.log(foo);

console.log(cube2(5));