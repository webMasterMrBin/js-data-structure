class DoublyLinkedList {
  constructor() {
    this.Node = this.Node.bind(this);
  }

  head = null;
  tail = null; // 末尾第一个元素
  length = null;

  Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }

  insert = (position, element) => {
    const node = new this.Node(element);
    let current;
    let previous;
    let index = 0;
    if (position <= this.length) {
      current = this.head;

      // 第一个位置插入
      if (position === 0) {
        // 列表为空
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.previous = node;
          this.head = node;
        }
      } else if (position === this.length) {
        // 在列表最后插入
        current = this.tail;
        current.next = node;
        node.previous = current;
        this.tail = node;
      } else {
        // 在列表中间插入
        if (position > this.length / 2) {
          current = this.tail;
          index = this.length;
          // 从tail尾部开始迭代
          while (index > position) {
            previous = current;
            current = current.previous;
            index--;
          }
          previous.previous = node;
          node.next = previous;

          current.next = node;
          node.previous = current;
        } else {
          while (index < position) {
            previous = current;
            current = current.next;
            index++;
          }

          previous.next = node;
          node.previous = previous;

          current.previous = node;
          node.next = current;
        }
      }
    }

    this.length++;
  };

  removeAt = position => {
    let current = this.head;
    let previous;
    let index = 0;

    if (position <= this.length) {
      if (position === 0) {
        // 删除第一个元素
        if (this.head) {
          this.head = current.next;
          current.next.previous = null;
        }
      } else if (position === this.length - 1) {
        // 删除最后一个元素
        // 找到最后一个元素
        // while (current.next) {
        //   current = current.next;
        // }
        // 最后一个元素等于tail 和循环等效
        current = this.tail;

        this.tail = current.previous;
        current.previous.next = null;
      } else {
        while (index < position) {
          // TODO position > lenth / 2 从尾部迭代
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        current.next.previous = previous;
      }

      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }
    }
  };
}
