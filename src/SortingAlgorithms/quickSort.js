export function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations)
    return animations
}

function quickSortHelper(
    array,
    startIdx,
    endIdx,
    animations,
) {
    if (startIdx < endIdx) {
        let part = partition(array, startIdx, endIdx, animations)

        quickSortHelper(array, startIdx, part - 1, animations)
        quickSortHelper(array, part + 1, endIdx, animations)
    }
}

let colorIt = true;
let unColor = false;

function partition(
    array,
    startIdx,
    endIdx,
    animations,

) {
    // false signifies not colored yet, true signifies if already colored
    let pivot = array[endIdx]

    // pushing endIdx to color and signal comparison
    animations.push([endIdx, colorIt])

    let i = (startIdx - 1)

    for (let j = startIdx; j <= endIdx - 1; j++) {
        // pushing value to be compared to pivot
        animations.push([j, colorIt])
        if (array[j] < pivot) {
            i++
            // push j to uncolor it, since the swap colors it
            animations.push([j, unColor])
            swap(array, i, j, animations)
        }
        else {
            // uncolor(LOL) if not to be swapped 
            animations.push([j, unColor])
        }
    }
    swap(array, i + 1, endIdx, animations)
    return (i + 1)

}

function swap(
    array,
    i,
    j,
    animations
) {

    let temp = array[i]
    // push these to color them to signal swapping
    animations.push([i, j, colorIt])
    // push again to uncolor
    animations.push([i, j, unColor])
    // push again to swap
    animations.push([i, j, array[i], array[j], unColor])
    array[i] = array[j]
    array[j] = temp;
}
