
# Merge function

Hi, this repo contains the merge function, unit test, and example.

## Setup by 

```bash
  npm install https://github.com/Lonoyaa/merge-function.git
  cd merge-function
  npm install
```

## test
Provides result from 4 cases, consists of merging two sorted arrays, handling empty arrays, handling one empty array and handling arrays with different lengths.

```bash
  npm test
```

## Run example
In this example, it recieves 2 input arrays(space-separated) from the user by using readline() function then sorts the elements of each before passing to the merge function.

**note that this sort function's only applied to sort the input array in the example in ascending order**
```bash
  node index
```

The output:
```bash
Enter the elements of first collection (space-separated): 1 4 2 9 5
Enter the elements of second collection(space-separated): 3 8
Sorted first collection: [ 1, 2, 4, 5, 9 ]
Sorted first collection: [ 3, 8 ]
Merged array: [
  1, 2, 3, 4,
  5, 8, 9
]
```
