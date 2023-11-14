// BubbleSort function
const bubbleSort = (inputArray) => {

    const elementCount = inputArray.length;

    for(let i = 0; i < elementCount; i++) {
        for(j = 0; j < elementCount - 1 - i; j++) {
            if(inputArray[j] > inputArray[j + 1]) {
                const valueHolder = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = valueHolder;
            }
        }
    }
};

// Unit Tests

// all distinct values
const distinctValuesArray = [6, 3, 1, 5, 4, 2];
bubbleSort(distinctValuesArray);
console.log(distinctValuesArray); // expected [1, 2, 3, 4, 5, 6]

// some of the same values
const sameValuesArray = [3, 3, 1, 2, 4, 2];
bubbleSort(sameValuesArray)
console.log(sameValuesArray); // expected [1, 2, 2, 3, 3, 4]

// values with negative numbers
const negativeValuesArray = [-1, -2, -3, -5, -6, -9];
bubbleSort(negativeValuesArray)
console.log(negativeValuesArray); // expected [-9, -6, -5, -3, -2, -1]

// values with both positive and negative numbers
const mixedValuesArray = [-1, -3, -5, -4, 8, 4, 2, 7, 1];
bubbleSort(mixedValuesArray)
console.log(mixedValuesArray); // expected [-5, -4, -3, -1, 1, 2, 4, 7, 8]

// values with alpha characters
const charValuesArray = ['f', 'a', 'c', 'g', 'b', 'd', 'e'];
bubbleSort(charValuesArray)
console.log(charValuesArray); // expected ['a', 'b', 'c', 'd', 'e', 'f', 'g']