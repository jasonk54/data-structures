var makeStack = function(){
  var stack = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var size = 0;

  // fill out these methods
  stack.add = function(ele){
    size++;
    storage.size = ele;
  };

  stack.remove = function(){
    if (size > 0) {
      var temp = storage.size;
      delete storage.size;
      size--;
      return temp;
    }
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
