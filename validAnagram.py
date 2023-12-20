"""
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of 
a different word or phrase, typically using all the original letters exactly once. 
"""

class Solution(object):
    # Sol. using sorted method, runs in O(nlogn) time complexity.
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        # Sorting the string performs in O(nlogn).
        sorted_s = ''.join(sorted(s))
        sorted_t = ''.join(sorted(t))

        return sorted_s == sorted_t
    
    def isAnagramLinearTime(self, s, t):
        if len(s) != len(t):
            return False
        
        # Create dictionary to store counts.
        counts = {}

        """ 
        The zip() function returns a zip object, which is an iterator of tuples where the first 
        item in each passed iterator is paired together, and then the second item in 
        each passed iterator are paired together etc.
        """
        for c1, c2 in zip(s, t):
            if c1 in counts:
                counts[c1] += 1
            else:
                counts[c1] = 1
            if c2 in counts:
                counts[c2] -= 1
            else:
                counts[c2] = -1
        
        for count in counts.values():
            if count != 0:
                return False
        return True

s = "anagram"
t = "nagaram"
S = Solution()
print(S.isAnagram(s, t))