// Example of the Insertion Sort algorithm, as discussed here:
const InsertionSort = (unsortedArray) => {

    let i = 1;
    while(i < unsortedArray.length) {
        let j = i;
        while(j > 0 && unsortedArray[j - 1] > unsortedArray[j]) {
            let temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[j - 1];
            unsortedArray[j - 1] = temp;
            --j;
        }
        i++;
    }
};

// unit tests
const array1 = [5,2,7,4,3,1,6];
InsertionSort(array1);
console.log(array1); // [1,2,3,4,5,6,7]

const array2 = [-1,-2,4,0,3,5,2,1];
InsertionSort(array2);
console.log(array2); // [-2,-1,0,1,2,3,4,5]

const array3 = [61,25,10,55,49,32,70,61];
InsertionSort(array3);
console.log(array3); // [10,25,32,49,55,61,61,70]