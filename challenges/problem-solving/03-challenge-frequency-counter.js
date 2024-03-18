/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/

function areThereDuplicates() {
  var counts = {};

  for (let arg of arguments) {
    if (counts[arg]) {
      counts[arg]++;
    } else {
      counts[arg] = 1;
    }
  }

  for (let count in counts) {
    console.log(count);
    if (counts[count] > 1) {
      return true;
    }
  }

  return false;
}

// from solution
function areThereDuplicatesMultiplePointer(...arg) {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
     
      let start = 0;
      let next = 1;
      while (next < args.length) {
        if (args[start] === args[next]) {
          return true;
        }
        start++;
        next++;
      }
      return false;
}

// from solution One Liner Solution
function areThereDuplicatesOneLiner() {
    return new Set(arguments).size !== arguments.length;
  }
