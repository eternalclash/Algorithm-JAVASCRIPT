class Solution:
    def lengthOfLongestSubstring(self,s):
        start= maxLength = 0
        usedChar = {}

        for i in range(len(s)):
            if s[i] in usedChar and start <= usedChar[s[i]]:
                start = usedChar[s[i]]+1
            else:
                maxLength = max(maxLength, i-start+1)

            usedChar[s[i]]=i
        return maxLength

        #len(s)=6, s[0]=p, usedChar={p:0,w:2,k:3}
        #abba abcdba akkda