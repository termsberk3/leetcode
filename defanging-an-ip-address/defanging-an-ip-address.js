/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    var defang = address.replace(/\./g,"[.]")
    return defang
    
};
