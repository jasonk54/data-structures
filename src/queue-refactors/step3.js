var makeQueue3 = function() {
  var queue = Object.create(queuePrototype);
  queue.storage = {};
  queue._size = 0;
  queue.counter = 0;
  return queue;
};

var queuePrototype = {};

queuePrototype.add = function(ele) {
  this.storage[this._size] = ele;
  this._size++;
};

queuePrototype.remove = function() {
  if (this._size >= 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return temp;
  }
};

queuePrototype.size = function() {
  return this._size - this.counter;
};
