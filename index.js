// Understanding merge sort

//  21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40 

// QuickSort in Action
// function sort(arr) {
//     const copiedArray = [...arr]

//     if(copiedArray.length <= 1) {
//         return copiedArray
//     }

//     const smallerElementsArray = []
//     const biggerElementsArray = []
//     const pivotElement = copiedArray.shift()
//     const centerElementsArray = [pivotElement]

//     while(copiedArray.length) {
//         const currentElement = copiedArray.shift()
//         if(currentElement === pivotElement) {
//             centerElementsArray.push(currentElement)
//         }
//         else if (currentElement < pivotElement) {
//             smallerElementsArray.push(currentElement)
//         }
//         else {
//             biggerElementsArray.push(currentElement)
//         }
//     }

//     const smallerElementsSortedArray = sort(smallerElementsArray)
//     const biggerElementsSortedArray = sort(biggerElementsArray)

//     return smallerElementsSortedArray.concat(centerElementsArray, biggerElementsSortedArray)

// }

// const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15])
// console.log(sortedArray)


// Merge Sort

function sort(arr) {
    if(arr.length < 2) {
        return arr
    }
    if(arr.length === 2) {
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
    }

    const middle = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, middle)
    const rightArray =  arr.slice(middle)

    const leftSortedArray = sort(leftArray)
    const rightSortedArray = sort(rightArray)

    const mergedArr = []
    let leftArrIndex = 0
    let rightArrayIndex = 0
    while(leftArrIndex < leftSortedArray.length || rightArrayIndex < rightSortedArray.length) {
        if(leftArrIndex >= leftSortedArray.length || leftSortedArray[leftArrIndex] > rightSortedArray[rightArrayIndex]) {
            mergedArr.push(rightSortedArray[rightArrayIndex])
            rightArrayIndex++
        } else {
            mergedArr.push(leftSortedArray[leftArrIndex])
            leftArrIndex++
        }
    }

    return mergedArr
}

const sortedArray = sort([-3, -10, 50, 120, -70, 22, 15])
console.log(sortedArray)