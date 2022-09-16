export function getBubbleSortAnimations(array) {
    const animations = []
    const n = array.length

    bubbleSortHelper(array, n, animations)
    return animations
}


function bubbleSortHelper(array, n, animations) {
    let i, j
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                animations.push([j, j + 1, array[j], array[j + 1], true])
                animations.push([j, j + 1, array[j], array[j + 1], false])
                swap(array, j, j + 1)
            }
        }
    }
}

function swap(array, xp, yp) {
    const temp = array[xp]
    array[xp] = array[yp]
    array[yp] = temp
}