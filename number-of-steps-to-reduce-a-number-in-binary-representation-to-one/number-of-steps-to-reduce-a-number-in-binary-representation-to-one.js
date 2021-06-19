/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    
    var number = BigInt("0b"+s)
    
        var counter = 0;
        
        while(number > 1n)
        {
            if(number%2n===1n)
            {
                number+=1n
                counter+= 1
                continue  
                
            }
            else if(number%2n===0n)
            {
                number = number / 2n
                counter+= 1
                continue

            }
        }
              
    return counter
};
