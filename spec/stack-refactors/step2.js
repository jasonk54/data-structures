describe("stack2", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack2();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  describe("add", function(){
    it('should add a new item into the stack', function(){
      stack.add('hello');
      stack.add('greetings');
      expect(stack.size()).toEqual(2);
    });
  });

  describe('remove', function(){
    it('should remove an item from the stack', function(){
      stack.add('hello');
      stack.remove();
      expect(stack.size()).toEqual(0);
      expect(stack.remove()).toEqual(undefined);
    });

    it('should work right if it\'s empty', function(){
      expect(stack.remove()).toEqual(undefined);
    });
  });

  it('should remove the first item', function(){
    stack.add('hello');
    stack.add('greetings');
    stack.add('bye');
    expect(stack.remove()).toEqual('bye');
    expect(stack.remove()).toEqual('greetings');
    expect(stack.remove()).toEqual('hello');
    expect(stack.remove()).toEqual(undefined);
  });
});