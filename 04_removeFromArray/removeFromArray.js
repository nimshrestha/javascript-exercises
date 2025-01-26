const removeFromArray = function(array) {
    
    const argsArray = Array.from(arguments).toSpliced(0,1);
    const newArray = [];
    for ( let i = 0; i < array.length; ++i ){
        
        if (!argsArray.includes(array[i])) {
            newArray.push(array[i]);
        }
            
        
    }
    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
