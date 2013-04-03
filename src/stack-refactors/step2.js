(function(){

  window.makeStack2 = function() {
    var stack = {};
    stack._storage = {};
    stack._size = 0;

    _.extend(stack, stackMethods);
    return stack;
  };

  var stackMethods = {};
  stackMethods.add = function(ele) {
    this._size++;
    this._storage[this._size] = ele;
  };

  stackMethods.remove = function() {
    if (this._size > 0) {
      var temp = this._storage[this._size];
      delete this._storage[this._size];
      this._size--;
      return temp;
    }
  };

  stackMethods.size = function() {
    return this._size;
  };

}());
