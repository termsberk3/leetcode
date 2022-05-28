/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  var myArray = []
  var result = 0
  var n = nums.length
  for(var i = 0; i<n;i++){
      myArray.push(i)
  }
  for(j = 0; j < myArray.length; j++){
        if(!isFound(nums,myArray[j])){
            return myArray[j]
        }
     }  
    return n;

};
var isFound = function(nums, target) {
    for(var b = 0; b<nums.length; b++){
        if(target === nums[b]){
            return true;
            }
      }  
    return false;
}; 