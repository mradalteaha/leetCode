/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */


/* Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function. */

/* Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element. */
/* var chunk = function(arr, size) {
    const chuncked = []

    for(let i=0; i<arr.length ;){
        let sub=[];
        for(j=0;j<size;j++){
            if(i===arr.length){
                break;
            }else{
                sub.push(arr[i])
                i++;
            }
           
           
        }
        chuncked.push(sub);
    } 
    return chuncked
}; */

var chunk = function(arr, size) {
    const chuncked = []
    let start=0
    let end =size >arr.length ?arr.length :size;
    let run=true;
    while(run){
        if(start===arr.length){
            console.log('third if')
            console.log(start)
            run=false;
            break;
        }       
            console.log(start,end)
            let sub=arr.slice(start,end)
            console.log(sub)
            chuncked.push(sub);
            start=end
            if(end + size > arr.length){
                console.log('first if')
                end = arr.length
            }else{
                console.log('second if')
                end = end + size
            }
        
           
    }
        
     
    return chuncked
};


 /* let arr = [1,2,3,4,5];
let size = 1;  */


//arr = [8,5,3,2,6], size = 6

arr = [1,9,6,3,2], size = 3

console.log(chunk(arr,size))