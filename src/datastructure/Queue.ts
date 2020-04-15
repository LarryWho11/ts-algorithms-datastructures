export class Node<T> {
    public readonly value: T;
    public next: Node<T>;
    public previous: Node<T> = null;

    constructor(value: T, next: Node<T>, previous: Node<T>) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

export class Queue<T> {
    public head: Node<T> = null;
    public tail: Node<T> = null;

    /**
     * Add a new element to the queue
     * @param t new value
     */
    queue(t: T): void {

    }

    /**
     * Remove and return the next element of the queue
     */
    dequeue(): T {
        return null;
    }

    /**
     * Iterate the Stack and return the whole content in LIFO manner
     */
    iterate(): Array<T> {
        return new Array<T>();
    }
}