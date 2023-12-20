class MinStack(object):

    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val):
        """
        :type val: int
        :rtype: None
        """
        self.stack.append(val)

        if len(self.min_stack) == 0 or val <= self.min_stack[-1]:
            self.min_stack.append(val)
        

    def pop(self):
        """
        :rtype: None
        """
        if (self.top() == self.getMin()):
            self.min_stack.pop()
        self.stack.pop()
        

    def top(self):
        """
        :rtype: int
        """
        return self.stack[len(self.stack) - 1]
        

    def getMin(self):
        """
        :rtype: int
        """
        if len(self.min_stack) != 0:
            return self.min_stack[-1]
        

    def printStacks(self):
        print(self.stack)
        print(self.min_stack)

m = MinStack()
m.push(0)
m.push(1)
m.push(0)
print(m.getMin())
m.pop()
m.printStacks()
