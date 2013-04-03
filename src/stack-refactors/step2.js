var makeStack2 = function(){
  var stack = {};
  stack._storage = {};
  stack._size = 0;

  _.extend(stack, {
    add : add,
    remove : remove,
    size: size
  });
  return stack;
};

var add = function(ele) {
  this._size++;
  this._storage[this._size] = ele;
};

var remove = function() {
  if (this._size > 0) {
    var temp = this._storage[this._size];
    delete this._storage[this._size];
    this._size--;
    return temp;
  }
};

var size = function() {
  return this._size;
};
