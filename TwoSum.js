/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    

try{
    let difMap = new Map()
    for(let i=0 ;i<nums.length;i++){//init the map
        difMap.set(nums[i],i)
    }


    for(let t=0 ;t<nums.length;t++){//init the map

        let difference = target-nums[t]
        if(difMap.get(difference) && t !==difMap.get(difference)){
            return [difMap.get(difference),t]
        }

    }
    
    return 'no indexes found'
    
}catch(err){
    console.log(err)
    return
}

    
};


let nums = [2,7,11,15]
let target = 9


console.log(twoSum(nums,target))