class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # Create an empty dictionary.
        d = {}

        for i in nums:
            if i in d:
                return True
            else:
                d[i] = 1
        return False

    

nums = [1,2,3,4,2]
solution = Solution()
print(solution.containsDuplicate(nums))