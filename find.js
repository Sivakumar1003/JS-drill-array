// function for iterate the array and check the condition, function of forEach.
function find(array, callback) {
    
    for(let index=0; index<array.length; index++) {
        let isfound = callback(array[index]);

        // if condition satisfied it will return.
        if(isfound) {
            return array[index];
        }
    }
}

module.exports = find;