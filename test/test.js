const expect = require("chai").expect;

// function bubbleSort(array){
//     let counter = 0;
//     while (counter < array.length){
//         for (i = 0; i < array.length - 1; i++){
//             var firstNum = array[i];
//             var secondNum = array[i+1];
//             if (firstNum > secondNum){
//                 array[i+1] = firstNum;
//                 array[i] = secondNum;
//             }
//             counter++
//         }
//     }
//     return array;
// }

function bubbleSort(array){
    do {
      var swapOccurred = false;
      for (i = 0; i < array.length - 1; i++){
        var firstNum = array[i];
        var secondNum = array[i +1];
        if (firstNum > secondNum){
          swapOccurred = true;
          array[i+1] = firstNum;
          array[i] = secondNum;
        }
      }
    }
    while (swapOccurred)
    return array;
  }

describe("bubble sort", () => {
    it ("it sorts", () => {
        expect(bubbleSort([2,1])).to.eql([1,2])
    })
    it ("it sorts", () => {
        expect(bubbleSort([2,7,9,3,12,100])).to.eql([2,3,7,9,12,100])
    })
})