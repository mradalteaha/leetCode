/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)). */

/* Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2. */

/* Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4,5,7,8] and median is (2 + 3) / 2 = 2.5. */

function medianOfArray (arr){ // help  function to return the median of one array
    try{
        //console.log(arr)
        if(arr.length%2 !==0){
           // console.log('odd array')

           // console.log(arr[Math.floor(arr.length/2) ])
            return arr[Math.floor(arr.length/2) ] 
        }else{
           // console.log('even array')
           // console.log(arr[(arr.length/2)-1])
            let val=(arr[arr.length/2] + arr[(arr.length/2)-1])/2
            if(isNaN(val)){
                return 0
            }else{
                return val
            }
            //console.log(val)
            
        }

    }catch(err){
        console.log(err)
        return err
    }
    
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function(nums1, nums2) {
    try{
        
        let med1 =medianOfArray(nums1) 
        let med2 = medianOfArray(nums2)
        console.log('printing the arrays')
        console.log(nums1)
        console.log(nums2)
        console.log('med1') 
        console.log(med1)
        console.log('med2')
        console.log(med2)

        if(med1 == med2){//if the median is equal in both then it's the median of the merge
            return med1
        }else if (med1 == 0 || med2 ==0){
            return med1==0 ? med2 : med1
        }

        else if(nums1.length + nums2.length == 2){
            if (nums1.length == 1 && nums2.length ==1){
                return  (nums1[0] + nums2[0])/2
            }
            else if (nums1.length == 2 && nums2.length == 0){
                return (nums1[0] + nums1[0])/2
            }
            else if (nums1.length == 0 && nums2.length == 2){
                return (nums2[0] + nums2[0])/2
            }
        }else if( nums1.length + nums2.length == 1){
            if (nums1.length > 0){
                return nums1[0]
            }else{
                return nums2 [0]
            }
        }
        else if(med1 > med2){////if the first array median is greated then we search for the median of the merged in the first half of the first array or the second half of the second array
            //slice the arrays into half
            return findMedianSortedArrays(nums1.slice(0,Math.floor(nums1.length/2)),nums2.slice(0,Math.floor(nums2.length/2)))

        }else if(med2 >  med1 ){ //if the second array median is greated then we search for the median of the merged in the second half of the first array or on the first half of the second array 
            return findMedianSortedArrays(nums1.slice(Math.floor(nums1.length/2) ,nums1.length),nums2.slice(0,Math.ceil(nums2.length/2)))

        }else{
            return
        }

    }catch(err){
        console.log(err)
        return err
    }
};


let nums1 = [1,3,5,7,8] , nums2 = [2,4,6,9,10] 
//let nums1 = [1,2], nums2 = [3,4]
//let nums1 = [1,3], nums2 = [2]
//let nums1 = [1], nums2 = []
//let nums1 = [1,2,3,4,5,6,7], nums2 = [8,9,10]
//let nums1 = [], nums2 = [2,3]

//console.log(findMedianSortedArrays([1], []))
console.log(findMedianSortedArrays(nums1, nums2))


