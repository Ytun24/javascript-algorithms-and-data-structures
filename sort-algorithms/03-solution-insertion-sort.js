function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(arr, i , j);

            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        console.log("j = ", j);
        console.log("ONE TIME PASS!");
    }
    return arr;
}

insertionSort([2,1,9,76,4])

/* 
Example
insertionSort([2, 1, 9, 76, 4])

[2, 1, 9, 76, 4] 1 0
j =  -1
ONE TIME PASS!
j =  1
ONE TIME PASS!
j =  2
ONE TIME PASS!
[1, 2, 9, 76, 4] 4 3
[1, 2, 9, 76, 76] 4 2
j =  1
ONE TIME PASS!

Return: [1, 2, 9, 4, 76]
*/
