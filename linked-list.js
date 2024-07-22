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

    // return the last node in the list
    tail() {
        let current = this.headNode;
        if (current === null) return null; // if list is empty

        // transverse through each node until it reaches last node 
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    // returns the node at the given index
    at(index) {
        let current = this.headNode;
        let count = 0;

        // transverse through each node until it reaches the node at the given index
        // or until it reaches the end of the list (null)
        while (current !== null && count < index) {
            current = current.nextNode;
            count++;
        }

        // if index was out of bounds, return null
        // else return the node
        return current !== null ? current : "There is no item at this index";
    }
}