var makeQueue2 = function() {
  var queue = {};
  queue._storage = {};
  queue._size = 0;
  queue._counter = 0;

  _.extend(queue, {
    add : add,
    remove : remove,
    size : size
  });
  return queue;
};

var add = function(ele) {
  this._storage[this._size] = ele;
  this._size++;
};

var remove = function() {
  if (this._size >= 0) {
    var temp = this._storage[this._counter];
    delete this._storage[this._counter];
    this._counter++;
    return temp;
  }
};

var size = function() {
  return this._size - this._counter;
};
