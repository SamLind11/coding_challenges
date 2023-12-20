class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        dictionary = {}
        for str in strs:
            sorted_string = ''.join(sorted(str))
            if sorted_string in dictionary:
                dictionary[sorted_string].append(str)
            else:
                dictionary[sorted_string] = [str]
        
        return dictionary.values()
        
strs = ["eat","tea","tan","ate","nat","bat"]
s = Solution()
print(s.groupAnagrams(strs))