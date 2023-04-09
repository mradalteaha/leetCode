class Solution:

    def isPalindrome(self, x: int) -> bool:
        if x<0:
            return False
           
        if x<10 and x>=0:
            return True
        p=[]
        lenx = int((x/10)  )
        while (x!=0):
            p.append(x%10) 
            x=int(x/10)
        print(p)            
       
        for i in range(0,int((len(p))/2)):
            if not (p[len(p)-i-1]== (p[i])):
                return False
       
        return True
        