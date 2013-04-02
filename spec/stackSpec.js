describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  describe("add", function(){
    it('should add a new item into the stack', function(){
      stack.add('hello');
      expect(stack.size()).toEqual(1);
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
});
