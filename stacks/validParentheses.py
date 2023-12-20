'''
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
'''
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        
        for i in s:
            if len(stack) != 0:
                top = stack[len(stack) - 1]
            else:
                top = ''
            if (i == '}' and top == '{'):
                stack.pop()
            elif (i == ')' and top == '('):
                stack.pop()
            elif (i == ']' and top == '['):
                stack.pop()
            elif (i == ']' or i == ')' or i == ']'):
                return False
            else:
                stack.append(i)

        return len(stack) == 0

            