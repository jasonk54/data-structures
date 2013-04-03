var makeStack = function(){
  var stack = {};
  var storage = {};
  var size = 0;

  stack.add = function(ele){
    size++;
    storage[size] = ele;
  };
  stack.remove = function(){
    if (size > 0) {
      var temp = storage[size];
      delete storage[size];
      size--;
      return temp;
    }
  };
  stack.size = function(){
    return size;
  };
  return stack;
};
