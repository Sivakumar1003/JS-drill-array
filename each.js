// function for iterate the array, function of forEach. 
function each(elements, callback) {
    //iterate the array one by one.
    for(let index =0; index < elements.length; index++) {
        //calling the logic function for each element.
        callback(elements[index], index, elements);
    }
}

module.exports = each;