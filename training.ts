// var zeros =function (n) {
//     var factorial = function(n) {
//         var cal = function (n, result) {
//             return n === 0 ? result : cal(n - 1, n * result);
//         };
//         return cal(n, 1);
//         // return n < 2 ? 1 : (factorial(n-1) * n);
//     };
//     console.log(factorial(1000));
//     // var factorialValue = Number(factorial(n)).toExponential(); // returns a string
//     // var trailingZero = 0;
//     // var modulusValue = 10;

//     // var factArray = factorialValue.split("e+");
//     // var decimals = factArray[0].split(".");
//     // trailingZeros = factArray[1] - decimals[1].length
//     // trailingZero = trailingZeros ? trailingZeros : 0;
//     // console.log(trailingZero);
//     // // return trailingZero;

//     // var factorialValue = factorial(n); console.log(factorialValue);
//     // trailingZero = 0;
//     // while (!(factorialValue % modulusValue)) {
//     //     trailingZero++;
//     //     modulusValue = Math.pow(10, trailingZero + 1);
//     // }
//     // console.log(trailingZero);
//     // // return trailingZero;  
// }

// zeros(20);

var zeros = function (n) {
    let power = 1;
    let totalFactors = 0;
    let uniqueFactors = 1;

    while (uniqueFactors >= 1) {
        uniqueFactors = Math.floor(n / Math.pow(5, power));
        totalFactors += uniqueFactors;
        power++;
    }
    console.log(totalFactors);
    return totalFactors;
};
zeros(1000);

var palindromeChainLength = function(n) {
  var counter = 0;
  var nRev = Number(n.toString().split('').reverse().join(''));
  var sum = 0;
  if(nRev !== n){
    counter++;
    sum = nRev + n;
    counter += palindromeChainLength(sum);
  } 
  
    console.log(counter);
    return counter;

};

palindromeChainLength(87);


var palindromeChainLength2 = function(n) {
    const reverse = function(reverseNumber) {
         return Number(reverseNumber.toString().split('').reverse().join(''));
    };
    let steps = 0;
    while(n !== reverse(n)) {
        n += reverse(n);
        steps++;
    }
    console.log(steps);
    return steps;
};
palindromeChainLength2(87);


// =============================
/*
    helper = PaginationHelper.new([1,2,3,4,5,6], 4)
    helper.page_count # should == 2
    helper.item_count # should == 6
    helper.page_item_count(0)  # should == 4
    helper.page_item_count(1) # last page - should == 2
    helper.page_item_count(2) # should == -1 since the page is invalid

    helper.page_index(5) # should == 1 (zero based index)
    helper.page_index(2) # should == 0
    helper.page_index(20) # should == -1
    helper.page_index(-10) # should == -1
*/
var PaginationHelper = function() {
    var item_count = 0;
    var page_count = 0;
    var pages = []; // turple
    var allItems = [];
    var page_item_count = function(pageNumber) {
        if(pageNumber >= pages.length) {
            return -1;
        }
        return pages[pageNumber].length;
    };

    var page_index = function(itemIndex) {
        if(itemIndex >= allItems.length) {
            return -1;
        }

        var pageItem = allItems[itemIndex];
        return pages.findIndex((page, pageIndex) => (page.indexOf(pageItem) >= 0));
    };

    var newInstance = function(items, maxPageItems) {
        allItems = items;
        item_count = items.length;
        page_count = Math.ceil(allItems.length / maxPageItems);
        pages = mapPageItems(allItems, maxPageItems, page_count);

        return {
            page_count,
            item_count,
            page_item_count,
            page_index,
        }
    };

    var mapPageItems = function(items, maxPageItems, pageCount) {
        var pages = [];
        let pageIndex = 0;
        for(pageIndex; pageIndex < pageCount; pageIndex++) {
            const startIndex = maxPageItems * pageIndex;
            const endIndex = maxPageItems * (pageIndex + 1);
            pages.push(items.slice(startIndex, endIndex));
        }
        return pages;
    };

    return { new: newInstance };

}();

var helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
console.log("Pagination: ======= ");
console.log(helper.page_count); // # should == 2
console.log(helper.item_count); // # should == 6
console.log(helper.page_item_count(0)); //  # should == 4
console.log(helper.page_item_count(1)); // # last page - should == 2
console.log(helper.page_item_count(2)); // # should == -1 since the page is invalid

console.log(helper.page_index(5)); // # should == 1 (zero based index)
console.log(helper.page_index(2)); // # should == 0
console.log(helper.page_index(20)); // # should == -1
console.log(helper.page_index(-10)); // # should == -1


interface P{
    [key: number]: string;
}

let listx: P[] = [ {0: "Peter"}, {1: "Marvin"}];
console.log(listx);


interface Test {
    [index: number]: string;
}

let names: Test = ["Sam", "Majanga", "Gemma"];
names.push("Muloooki");
console.log(names.length);


// These example test cases are editable, feel free to add
// your own tests to debug your code.

let assert = require("chai").assert;
describe('Challenge', function() {
  it('should say hello', function() {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
  it('should handle blank input', function() {
    assert.equal(sayHello(""), "Hello there!");
  });
});
