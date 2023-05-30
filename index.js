"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
//parse the string input and map to array of number(int)
//the input separate by space
function parseInput(input) {
    return input.split(' ').map(function (str) { return parseInt(str); });
}
function sort(array) {
    var sorted = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        var index = 0;
        while (index < sorted.length && sorted[index] < num) {
            index++;
        }
        sorted.splice(index, 0, num);
    }
    return sorted;
}
var readline = require('readline');
var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
readlineInterface.question('Enter the elements of first collection (space-separated): ', function (input1) {
    readlineInterface.question('Enter the elements of second collection(space-separated): ', function (input2) {
        // Parse the user inputs
        var collection_1 = parseInput(input1);
        var collection_2 = parseInput(input2);
        // Sort input
        var sorted_1 = sort(collection_1);
        console.log('Sorted first collection:', sorted_1);
        var sorted_2 = sort(collection_2);
        console.log('Sorted first collection:', sorted_2);
        // Call the merge function
        var mergedArray = (0, merge_1.default)(sorted_1, sorted_2);
        console.log('Merged array:', mergedArray);
        readlineInterface.close();
    });
});
