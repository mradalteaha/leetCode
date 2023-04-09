class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        y=needle
        z=haystack
        count = 0
        if y in z :
            for  i in range (0,len(z)):
                if y in z[i:i+len(y)]:
                    return i
        else :
            return -1 