import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.headNode = null;
    }

    // add a new node containing value to the end of the list 
    append(value) {
        const newNode = new Node(value);

        // if list is empty, new node becomes the head node of the list
        // if not empty, transverse the list to find the last node 
        // and set its nextNode to the new node
        if (this.headNode === null) {
            this.headNode = newNode;
        } else {
            let current = this.headNode;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    // add a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value, this.headNode); // nextNode = this.headNode
        this.headNode = newNode;
    }

    // return the total number of nodes in the list
    size() {
        let count = 0;
        let current = this.headNode;

        // transverse the list and increment the count until it reaches last node (null)
        while (current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    // return the first node in the list
    head() {
        return this.headNode;
    }
}