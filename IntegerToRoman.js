/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    /*convert the number to digits , thousand hundred tens and last digit */
    let thousands = Math.floor(num/1000)%10
    let hundred = Math.floor(num/100)%10
    let tens = Math.floor(num/10)%10
    let digit = Math.floor(num)%10

    

    console.log(thousands)
        console.log(hundred)

    console.log(tens)
    console.log(digit)

    
};


intToRoman(1994)