
// Using the example above. Given array ar1 = [1,2,3,4,5];, write a function which returns an array of functions functionsArray. 
// Each item (Function) in functionsArray when executed should return the sums below.

/* functionsArray[0]() = 1 // ar1[0]; 0 + 1
functionsArray[1]() = 3 // ar1[0] + ar1[1]; // 1 + 2 = 3
functionsArray[2]() = 5 // ar1[1] + ar1[2]; // 2 + 3 = 5
functionsArray[3]() = 7 // ar1[2] + ar1[3]; // 3 + 4 = 7
functionsArray[4]() = 9 // ar1[3] + ar1[4]; // 4 + 5 = 9
*/

// solution

var ar1 = [1,2,3,4,5];
var functionsArray =  ar1.map(function(arrayItem,index, ar1) {
    const previousValue = index === 0 ? 0 : ar1[index - 1];
    return function(inc) {
        console.log(previousValue + arrayItem);
        return previousValue + arrayItem;
    };
})

functionsArray.forEach(function (arrayItem) {
    arrayItem();
});
