import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.append('Tifa');
console.log(list.toString()); // ( Tifa ) -> null

list.prepend('Cloud');
console.log(list.toString()); // ( Cloud ) -> ( Tifa ) -> null
console.log(list.size()); // 2
console.log(list.head()); // Node { value: 'Cloud', nextNode: Node { value: 'Tifa', nextNode: null } }
console.log(list.tail()); // Node { value: 'Tifa', nextNode: null }

console.log(list.at(0)); // Node { value: 'Cloud', nextNode: Node { value: 'Tifa', nextNode: null } }
console.log(list.at(1)); // Node { value: 'Tifa', nextNode: null }
console.log(list.at(2)); // There is no item at this index

list.append('Barret');
console.log(list.toString()); // ( Cloud ) -> ( Tifa ) -> ( Barret ) -> null
console.log(list.size()); // 3

console.log(list.contains("Barret")); // true
list.pop();
console.log(list.contains("Barret")); // false

list.insertAt("Aerith", 1); 
console.log(list.toString()); // ( Cloud ) -> ( Aerith ) -> ( Tifa ) -> null
list.removeAt(1);
console.log(list.toString()); // ( Cloud ) -> ( Tifa ) -> null

console.log(list.contains("Cloud")); // true
console.log(list.contains("Tifa")); // true

console.log(list.find("Cloud")); // 0
console.log(list.find("Tifa")); // 1
console.log(list.find("Aerith")); // null
console.log(list.find("Barret")); // null