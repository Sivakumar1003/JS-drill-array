function flatten(elements) {
    let newArray = [];

    for(let i=0; i<elements.length; i++) {
        if (Array.isArray(elements[i])) {
            newArray = newArray.concat(flatten(elements[i]));
        } else {
            newArray.push(elements[i]);
        }
    }
    
    return newArray;
}

module.exports = flatten;