var makeStack3 = function() {
  var stack = Object.create(stackPrototype);
  var storage = [];
  var size = 0;
};

var stackPrototype = {};

stackPrototype.add = function(ele){
  this.size++;
  this.storage[size] = ele;
};

stackPrototype.remove = function(){
  if (this.size > 0) {
    var temp = this.storage[size];
    delete this.storage[size];
    this.size--;
    return temp;
  }
};

stackPrototype.size = function(){
  return this.size;
};