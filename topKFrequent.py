"""
Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.
"""
test = [5,2,2, 6, 6, 6, 10, 10,1,1,2,2,3]
k = 2

def topKFrequent(nums, k):

    """
    :type nums: List[int]
    :type k: int
    :rtype: List[int]
    """
    # Define a dictionary to hold pairs of ints and their counts.   
    dict = {}
    for i in nums:

        # "in" keyword checks to see if i is a key in dict.
        if i in dict:
            count = dict[i]
            dict[i] = count + 1
        else:
            dict[i] = 1
    
    # Sort the dict by the item (count) values in decreasing order.
    list = sorted(dict.items(), key=lambda x: -x[1])

    # Create a list of the keys (ints).
    answer = [x[0] for x in list]

    # Return the first k keys.
    return answer[:k]

print(topKFrequent(test, k))