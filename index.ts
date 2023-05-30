import merge from "./merge";

//parse the string input and map to array of number(int)
//the input separate by space
function parseInput(input: string): Array<number> {
    return input.split(' ').map((str) => parseInt(str));
}

function sort(array: Array<number>): Array<number>{

    const sorted:Array<number> = []
    for (const num of array) {
        let index = 0
        while (index < sorted.length && sorted[index] < num) {
          index++
        }
        sorted.splice(index, 0, num)
      }
    return sorted  
}

const readline = require('readline')
const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readlineInterface.question('Enter the elements of first collection (space-separated): ', (input1) => {
    readlineInterface.question('Enter the elements of second collection(space-separated): ', (input2) => {
      // Parse the user inputs
      const collection_1 = parseInput(input1)
      const collection_2 = parseInput(input2)
      // Sort input
      const sorted_1 = sort(collection_1)
      console.log('Sorted first collection:',sorted_1)
      const sorted_2 = sort(collection_2)
      console.log('Sorted first collection:',sorted_2)
    
      // Call the merge function
      const mergedArray = merge(sorted_1, sorted_2)

console.log('Merged array:', mergedArray)
  
      readlineInterface.close()
    })
})