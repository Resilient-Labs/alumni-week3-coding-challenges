//chunk and sort str into separate arrays
//console.log(‘test 1’, chunkSort(“babababcc”))
//output: [[‘a’, ‘a’, ‘a’, ‘a’], [‘b’, ‘b’, ‘b’, ‘b’], [‘c’, ‘c’]]

const chunkSortStr = str => {
    // if the input is not a string return this is a typeof input please enter a string
    if (typeof str !== 'string') return `This is a ${typeof str} Please enter a string`;
    // if the string is empty return Please entere a string with values
    if (str.length === 0) return 'Please enter a string with values';
    // make the inputed string into an array
    const sortedLetterArray = str.split('').sort();
    // create a strChuncksContainer that will hold the chunked string
    let strChuncksContainer = [];
    let letterTracker = ''; 
    // loop through all the elements in sortedLetterArray
    for (let i = 0; i < sortedLetterArray.length; i++) {
        const lastElStrChuncksContainer = strChuncksContainer[strChuncksContainer.length - 1]
        //
        if (!lastElStrChuncksContainer || sortedLetterArray[i] !== letterTracker) {
            //push [sortedLetterArray[i] to strChunksContainer
            strChuncksContainer.push([sortedLetterArray[i]]);
            //reassign letterTracker(empty str) to sortedLetterArray @ [i]
            letterTracker = sortedLetterArray[i];
        } else {
            lastElStrChuncksContainer.push(sortedLetterArray[i])
            letterTracker = sortedLetterArray[i];
        }
    }

    return strChuncksContainer;

}

console.log('test 1', chunkSortStr('babababcc')) //[[‘a’, ‘a’, ‘a’, ‘a’], [‘b’, ‘b’, ‘b’, ‘b’], [‘c’, ‘c’]]
console.log('test 2', chunkSortStr({})) // error msg
console.log('test 3', chunkSortStr('')) // error msg

