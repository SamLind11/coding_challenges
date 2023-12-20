""" 
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
"""
## THIS DOESN'T WORK FOR NEGATIVE NUMBERS


class Solution(object):
    def productExceptSelf(nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        # Empty string to build mult statements.
        string = ""
        ans = []

        # Build a string which is the product of the entire list, e.g. "1*2*3*4".
        for idx, x in enumerate(nums):
            string += str(x)

            # Only add a "*" if not on the last element of the list.
            if idx + 1 != len(nums):
                string += "*"

        for i in range(len(nums)):
            # Slice the mult string from the 2i position to the 2i + 1 position. Add *1 for the edge case
            # where the string ends in a *.
            p_string = string[:2*i] + string[2*i+2:] + "*1"
            cur = str(nums[i])
            p_string = p_string.replace(cur, "", 1)
            p_string = p_string.replace("**", "*")
            print(p_string)
            # Use eval() to evaluate the product string.
            # ans.append(eval(p_string))
        return ans
# Test input
nums = [-1,1,0,-3,3]
Solution.productExceptSelf(nums)