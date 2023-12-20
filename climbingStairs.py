""" 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
"""

# Recursive solution.
class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        def counter(n):
            if (n-1 == 0):
                return 1
            elif (n-2 == 0):
                return 2
            else:
                return counter(n-1) + counter(n-2)
            
        return counter(n)
    
    def nonRecursive(self, n):

        if (n == 1):
            return 1
        d = [0] * (n + 1)
        d[1] = 1
        d[2] = 2

        for i in range(3, n + 1):
            d[i] = d[i - 1] + d[i - 2]
        return d[n]
    
s = Solution()
print(s.climbStairs(4))