class Solution:
    """
    @param: strs: a list of strings
    @return: encodes a list of strings to a single string.
    """
    def encode(self, strs):
        # write your code here
        encoder = ':;'
        encoded_array = []

        for string in strs:
          encoded_array.append(str(list(string).append(encoder)))
            
        
        print(encoded_array)




    """
    @param: str: A string
    @return: dcodes a single string to a list of strings
    """
    def decode(self, str):
        # write your code here
        pass

s = Solution()
s.encode(["Hello ", "World"])
