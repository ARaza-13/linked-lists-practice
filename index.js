import LinkedList from "./linked-list.js";

const list = new LinkedList();
console.log(list.size());
console.log(list.head());
console.log(list.tail());

list.append('Tifa');
console.log(list);

list.append('Barret');
console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());

console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));

list.prepend('Cloud');
console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());

list.pop();
console.log(list);