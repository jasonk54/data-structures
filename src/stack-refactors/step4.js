var MakeStack4 = function() {
  this.storage = [];
  this._size = 0;
};

MakeStack4.prototype.add = function(ele) {
  this._size++;
  this.storage[this._size] = ele;
};

MakeStack4.prototype.remove = function() {
  if (this._size > 0) {
    var temp = this.storage[this._size];
    delete this.storage[this._size];
    this._size--;
    return temp;
  }
};

MakeStack4.prototype.size = function() {
  return this._size;
};

