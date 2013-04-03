var makeQueue2 = function(){
  var queue = {};
  var storage = {};
  var size = 0;
  var counter = 0;

  return _.extend(queue, {
    add : add,
    remove : remove,
    size : size
  });

};

var add = function(ele){
  this.storage[this.size] = ele;
  this.size++;
};

var remove = function(){
  if (this.size >= 0) {
    var temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return temp;
  }
};

var size = function(){
  return this.size - this.counter;
};
