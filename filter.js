// function for iterate the array and check the condition, function of filter.
function filter(array, callback) {
    let newArray = [];
    
    for(let index=0; index<array.length; index++) {
        let isfound = callback(array[index]);

        // if condition satisfied it will add to new array.
        if(isfound) {
            newArray.push(array[index]);
        }
    }

    // return new array.
    return newArray;
}

module.exports = filter;