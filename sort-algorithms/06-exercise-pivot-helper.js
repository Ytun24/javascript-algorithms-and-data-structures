/*

Pivot Pseudocode
1. It will help to accept three arguments: an arr, a start index, and an end index (these can default to 0 and the arr length minus 1, respectively)
2. Grab the pivot from the start of the arr 
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up)
4. Loop through the arr from the start until the end
   If the pivot is greater than the current element, 
   increment the pivot index variable 
   and then swap the current element with the element at the pivot index
5. Swap the starting element (i.e. the pivot) with the pivot index
6. Return the pivot index

*/

function pivot(arr, startIndex, endIndex) {
  let pivotPoint = 0;
  let pivot = arr[startIndex];

  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 1; i < arr.length; i++) {
    // compare pivot greater than current value
    if (pivot > arr[i]) {
      // increase pivotPoint
      pivotPoint += 1;
      swap(arr, i, pivotPoint);
      console.log("swap:", i, pivotPoint);
    }
    console.log(arr, arr[pivotPoint], arr[i]);
  }

  swap(arr, startIndex, pivotPoint);
  console.log("Result: ", arr, pivotPoint);

  return pivotPoint;
}

// pivot([ 5, 2, 1, 4, 6, 3 ], 0, 5)
pivot([4, 8, 2, 1, 6, 3], 0, 5);

/*
Example

pivot([ 4, 8, 2, 1, 6, 3 ], 0, 5)

[ 4, 8, 2, 1, 6, 3 ] 4 8
swap: 2 1
[ 4, 2, 8, 1, 6, 3 ] 2 8
swap: 3 2
[ 4, 2, 1, 8, 6, 3 ] 1 8
[ 4, 2, 1, 8, 6, 3 ] 1 6
swap: 5 3
[ 4, 2, 1, 3, 6, 8 ] 3 8

Result:  [ 3, 2, 1, 4, 6, 8 ] 3
*/

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  static enrollStudents(...students) {
    console.log("ENROLL");
  }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName(); // "Colt Steele"

Student.enrollStudents([firstStudent, secondStudent]);


