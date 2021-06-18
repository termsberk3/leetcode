/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
 var maxCandies = Math.max(...candies)
    var canMax = false;
    const boolArray = []
    for(var i = 0; i < candies.length ; i++){
        var result = candies[i] + extraCandies
        if(result >= maxCandies){
            canMax = true
            boolArray.push(canMax)
        }else{
            canMax = false
            boolArray.push(canMax)
        }
    }
    return boolArray
    
};