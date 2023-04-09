/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const Nums ={"I":1 ,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000,"IV":4,"IX":9,"XL":40,"XC":90,"CD":400,"CM":900}
    let sum=0
    for(let i=0 ;i < s.length;){
        let x=s[i]+s[i+1] 
        if(Nums[x]){
            sum+=Nums[x]
            i+=2
        }else{
            sum+=Nums[x[0]]
            i+=1
        }
    }
    return sum
};