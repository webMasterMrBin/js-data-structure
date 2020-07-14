class CircularLinkedList {
  constructor() {
    // this.Node = this.Node.bind(this);
    this.head = {};
    this.tail = {};
    this.head.previous = this.tail;
    this.tail.next = this.head;
    this.length = 0;
  }

  Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }

  insert = (position, element) => {
    let current;
    let previous;

    const node = new this.Node(element);
    if (position <= this.length) {
      if (position === 0) {
        // 在第一个位置
        //列表为空
        if (!this.head.next) {
          this.head.next = node;
          node.previous = this.head;
          this.tail.previous = node;
          node.next = this.tail;
        } else {
          current = this.head.next;
          node.next = current;
          current.previous = node;
          this.head.next = node;
          node.previous = this.head;
        }
      } else if (position === this.length) {
        // 末尾插入
        current = this.tail.previous;
        node.previous = current;
        current.next = node;
        this.tail.previous = node;
        node.next = this.tail;
      } else {
        current = this.head.next;
        while (position < this.length) {
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.previous = previous;

        node.next = current;
        current.previous = node;
      }
    }

    this.length++;
  };

  removeAt = position => {
    let current;
    let previous;
    let index = 0;

    if (position <= this.length) {
      //删除第一个
      if (position === 0) {
        if (this.head.next) {
          current = this.head.next;
          this.head.next = current.next;
          current.next.previous = this.head;
        }
      } else if (position === this.length - 1) {
        current = this.tail.previous;
        current.previous.next = this.tail;
        this.tail.previous = current.previous;
      } else {
        current = this.head.next;
        while (position > index) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = current.next;
        current.next.previous = previous;
      }
    }

    this.length--;
  };
}
