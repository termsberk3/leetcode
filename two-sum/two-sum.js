/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) 
{
    const number = []
    var result = 0;
    
    for(var i=0; i<nums.length; i++)
    {
        
        for(var j=0;j < nums.length;j++)
           
        {
            if(i!==j)
            {
                result = nums[i] + nums[j]
            
                if(target === result){
                     number.push(i,j)
                     return number;
                }
            }
        }
    }
};
