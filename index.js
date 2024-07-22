import LinkedList from "./linked-list.js";

const list = new LinkedList();
console.log(list.size());
console.log(list.head());

list.append('Tifa');
console.log(list);
console.log(list.size());
console.log(list.head());

list.append('Barret');
console.log(list);
console.log(list.size());

list.prepend('Cloud');
console.log(list);
console.log(list.size());
console.log(list.head());