var makeStack3 = function() {
  var stack = Object.create(stackPrototype);
  stack.storage = [];
  stack._size = 0;
  return stack;
};

var stackPrototype = {};

stackPrototype.add = function(ele) {
  this._size++;
  this.storage[this._size] = ele;
};

stackPrototype.remove = function() {
  if (this._size > 0) {
    var temp = this.storage[this._size];
    delete this.storage[this._size];
    this._size--;
    return temp;
  }
};

stackPrototype.size = function() {
  return this._size;
};