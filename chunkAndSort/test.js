const chunkSortStr = string => {
    // if the input is not a string return this is a typeof input please enter a string
    if (typeof string !== 'string') return `this is a ${typeof string} please enter a string`;
    // if the string is empty return Please entere a string with values
    if (string.length === 0) return 'Please entere a string with values';
    // make the inputed string into an array
    const sortedLetterArray = string.toUpperCase().split('').sort();
    // create a containerOfSringChuncks that will hold the chunked string
    let containerOfStringChuncks = [];
    // loop through all the elements in sortedLetterArray
    for (let i = 0; i < sortedLetterArray.length; i++) {
        const lastElementOfContainerOfStringChuncks = containerOfStringChuncks[containerOfStringChuncks.length - 1]
        if (!lastElementOfContainerOfStringChuncks || sortedLetterArray[i] !== sortedLetterArray[i + 1]) {
            containerOfStringChuncks.push([i])
        } else {
            lastElementOfContainerOfStringChuncks.push(i)
        }

    }
    return containerOfStringChuncks

}

console.log('test 1', chunkSortStr('babababcc')) //[[‘a’, ‘a’, ‘a’, ‘a’], [‘b’, ‘b’, ‘b’, ‘b’], [‘c’, ‘c’]]
console.log('test 2', chunkSortStr({})) //[[‘a’, ‘a’, ‘a’, ‘a’], [‘b’, ‘b’, ‘b’, ‘b’], [‘c’, ‘c’]]
console.log('test 3', chunkSortStr('')) //[[‘a’, ‘a’, ‘a’, ‘a’], [‘b’, ‘b’, ‘b’, ‘b’], [‘c’, ‘c’]]




