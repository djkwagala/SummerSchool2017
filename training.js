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
    var power = 1;
    var totalFactors = 0;
    var uniqueFactors = 1;
    while (uniqueFactors >= 1) {
        uniqueFactors = Math.floor(n / Math.pow(5, power));
        totalFactors += uniqueFactors;
        power++;
    }
    console.log(totalFactors);
    return totalFactors;
};
zeros(1000);
var palindromeChainLength = function (n) {
    var counter = 0;
    var nRev = Number(n.toString().split('').reverse().join(''));
    var sum = 0;
    if (nRev !== n) {
        counter++;
        sum = nRev + n;
        counter += palindromeChainLength(sum);
    }
    console.log(counter);
    return counter;
};
palindromeChainLength(87);
var palindromeChainLength2 = function (n) {
    var reverse = function (reverseNumber) {
        return Number(reverseNumber.toString().split('').reverse().join(''));
    };
    var steps = 0;
    [].reverse()
    while (n !== reverse(n)) {
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
var PaginationHelper = function () {
    var item_count = 0;
    var page_count = 0;
    var pages = []; // turple
    var allItems = [];
    var page_item_count = function (pageNumber) {
        if (pageNumber >= pages.length) {
            return -1;
        }
        return pages[pageNumber].length;
    };
    var page_index = function (itemIndex) {
        if (itemIndex >= allItems.length) {
            return -1;
        }
        var pageItem = allItems[itemIndex];
        return pages.findIndex(function (page, pageIndex) { return (page.indexOf(pageItem) >= 0); });
    };
    var newInstance = function (items, maxPageItems) {
        allItems = items;
        item_count = items.length;
        page_count = Math.ceil(allItems.length / maxPageItems);
        pages = mapPageItems(allItems, maxPageItems, page_count);
        return {
            page_count: page_count,
            item_count: item_count,
            page_item_count: page_item_count,
            page_index: page_index
        };
    };
    var mapPageItems = function (items, maxPageItems, pageCount) {
        var pages = [];
        var pageIndex = 0;
        for (pageIndex; pageIndex < pageCount; pageIndex++) {
            var startIndex = maxPageItems * pageIndex;
            var endIndex = maxPageItems * (pageIndex + 1);
            pages.push(items.slice(startIndex, endIndex));
        }
        return pages;
    };
    return { new: newInstance };
}();
var helper = PaginationHelper.new(['a', 'b', 'c', 'd', 'e', 'f'], 4);
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
var listx = [{ 0: "Peter" }, { 1: "Marvin" }];
console.log(listx);
var names = ["Sam", "Majanga", "Gemma"];
names.push("Muloooki");
console.log(names.length);
