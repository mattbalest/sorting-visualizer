export function getHeapSortAnimations(array) {
    const animations = []
    heapSortHelper(array, animations)
    return animations
}

function heapSortHelper(
    array,
    animations
) {
    let n = array.length

    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        heapify(array, n, i, animations)
    }
    for (let i = n - 1; i > 0; i--) {

        const temp = array[0]
        array[0] = array[i]
        array[i] = temp

        // color swapped bars
        animations.push([i, 0, array[i], array[0], true, true])
        animations.push([i, 0, array[i], array[0], false, true])


        heapify(array, i, 0, animations)
    }

}

function heapify(array, n, i, animations) {

    let largest = i
    // animations.push([i, true, true])
    let left = 2 * i + 1
    let right = 2 * i + 2


    if (left < n && array[left] > array[largest]) {
        // animations.push([left, largest, false])
        largest = left
    }



    if (right < n && array[right] > array[largest]) {
        // animations.push([right, largest, false])
        largest = right
    }


    // animations.push([i, true, false])

    if (largest !== i) {

        let swap = array[i]
        array[i] = array[largest]
        array[largest] = swap

        // push once to signal swapping
        animations.push([i, largest, array[i], array[largest], true])
        // push again to actually swap
        animations.push([i, largest, array[i], array[largest], false])
        heapify(array, n, largest, animations)
    }
}