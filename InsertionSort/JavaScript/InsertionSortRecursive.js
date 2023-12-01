// Example of the Insertion Sort algorithm, as discussed here:
const recursiveInsertionSort = (unsortedArray, position) => {

    if(position > 0) {
        recursiveInsertionSort(unsortedArray, position - 1);
        let temp = unsortedArray[position];
        let i = position - 1;
        while(i >= 0 && unsortedArray[i] > temp) {
            unsortedArray[i + 1] = unsortedArray[i];
            --i;
        }
        unsortedArray[i + 1] = temp;
    }

};

// unit tests
const array1 = [5,2,7,4,3,1,6];
recursiveInsertionSort(array1, array1.length - 1);
console.log(array1); // [1,2,3,4,5,6,7]

const array2 = [-1,-2,4,0,3,5,2,1];
recursiveInsertionSort(array2, array2.length - 1);
console.log(array2); // [-2,-1,0,1,2,3,4,5]

const array3 = [61,25,10,55,49,32,70,61];
recursiveInsertionSort(array3, array3.length - 1);
console.log(array3); // [10,25,32,49,55,61,61,70]