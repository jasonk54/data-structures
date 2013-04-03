var MakeQueue4 = function() {
  this.storage = {};
  this._size = 0;
  this.counter = 0;
};

MakeQueue4.prototype.add = function(ele) {
  this.storage[this._size] = ele;
  this._size++;
};

MakeQueue4.prototype.remove = function() {
  if (this._size >= 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return temp;
  }
};

MakeQueue4.prototype.size = function() {
  return this._size - this.counter;
};
