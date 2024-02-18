/*
BubbleSort Pseudocode (Naive)

1. Start looping with a variable called i from the end of the array towards the beginning
2. Start an inner loop with a variable called j from the beginning until i - 1
3. If arr[j] is greater than arr[j+1], swap those two values!
4. Return the sorted array
*/

function bubbleSort(arr) {
    for (let i = arr.length-1; i >= 0; i--) {
        for(let j = 0; j <= i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);

            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
        console.log("ONE TIME PASS!");
    }

    return arr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

/* 
Example
bubbleSort([6, 4, 15, 10]);

[6, 4, 15, 10] 6 4
[4, 6, 15, 10] 6 15
[4, 6, 15, 10] 15 10
ONE TIME PASS!
[4, 6, 10, 15] 4 6
[4, 6, 10, 15] 6 10
ONE TIME PASS!
[4, 6, 10, 15] 4 6
ONE TIME PASS!
[4, 6, 10, 15]
*/
