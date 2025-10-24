var twoSum = function(nums, target) {
    
    for (let i = 0; i<nums.length; i++){
        for (let n = 0; n<nums.length; n++){
            if (nums[i]+nums[n] == target && i!=n){
                return [i, n];
            }
        }
    }
    
};

console.log(twoSum([2,5,5,11],10))