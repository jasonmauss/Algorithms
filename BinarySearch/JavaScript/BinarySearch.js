const binarySearch = (inputValuesArray, valueToFind) => {

    let leftPosition = 0;
    let rightPosition = inputValuesArray.length - 1;

    while(leftPosition <= rightPosition) {
        let middlePosition = Math.floor((leftPosition + rightPosition) / 2);

        if(inputValuesArray[middlePosition] < valueToFind) {
            leftPosition = ++middlePosition;
        } else if (inputValuesArray[middlePosition] > valueToFind) {
            rightPosition = --middlePosition;
        } else {
            return middlePosition;
        }
    }
    
    return -1;

};

// Unit Tests

const searchArraySequential = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(searchArraySequential, 4)); // expected: 3

const searchArrayDuplicates = [1, 2, 3, 4, 4, 5, 6, 7];
console.log(binarySearch(searchArrayDuplicates, 4)); // expected: 3 or 4

const searchArraySkippedNumbers = [4, 10, 17, 22, 41, 50, 77, 102, 133, 196];
console.log(binarySearch(searchArraySkippedNumbers, 50)); // expected: 5

const searchArrayValueDoesntExist = [10, 25, 32, 49, 55, 61, 70];
console.log(binarySearch(searchArrayValueDoesntExist, 42)); // expected: -1