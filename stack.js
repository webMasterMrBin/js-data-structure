// 栈
class Stack {
  items = [];

  push = element => {
    this.items.push(element);
  };

  pop = () => this.items.pop();

  peek = () => this.items[this.items.length - 1];

  isEmpty = () => this.items.length === 0;

  size = () => this.items.length;

  clear = () => {
    this.items = [];
  };

  print = function() {
    console.log(this.items.toString());
  };
}
