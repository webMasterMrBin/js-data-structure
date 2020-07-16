class LinkedList {
  length = 0; // 链表长度
  head = null; // 第一个节点的引用 可以改为私有方法

  constructor() {
    this.Node = this.Node.bind(this);
  }

  // 要加入到当前链表的项(插到末尾所以next是null) 包含当前元素内容element和next指针(next即表示下一个指向的对象)
  Node(element) {
    this.element = element;
    this.next = null;
  }

  // 向列表尾部添加一个新的元素。
  append = element => {
    const node = new this.Node(element);
    let current;
    // 当前链表为空 插入的是第一个节点
    if (this.head === null) {
      this.head = node;
    } else {
      // 不为空
      current = this.head;

      while (current.next) {
        // 循环列表，为了直到找到最后一项
        current = current.next;
      }

      // 最后一项 next指向node
      current.next = node;
    }

    // 更新列表长度
    this.length++;
  };

  // 从给定的位置删除一个元素
  // position默认大于0
  remoteAt = position => {
    let current = this.head;
    let index = 0;
    let previous;

    // 需先检查位置是否越界
    if (position < this.length) {
      // 要删除的是第一个元素
      if (position === 0) {
        // head 指向列表中第二个元素
        this.head = current.next;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
    }
  };

  // 给定的位置插入一个元素
  insert = (position, element) => {
    if (position <= this.length) {
      let current = this.head;
      let previous;
      let index = 0;

      const node = new this.Node(element);
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = node;
        node.next = current;
      }

      this.length++;
    }
  };

  toString = () => {
    var current = this.head, //{1}
      string = ""; //{2}
    while (current) {
      //{3}
      string = current.element; //{4}
      current = current.next; //{5}
    }
    return string;
  };

  indexOf = element => {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
  };

  remove = element => {
    const index = this.indexOf(element);
    this.remoteAt(index);
  };
}
