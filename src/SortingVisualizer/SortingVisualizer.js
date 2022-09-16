import './SortingVisualizer.css'
import React from 'react'
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort.js';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort.js';
import { getHeapSortAnimations } from '../SortingAlgorithms/heapSort.js';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort';


export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray()
    }

    resetArray() {
        const array = []
        for (let i = 0; i < 220; i++) {
            array.push(randomIntFromInterval(5, 650));
        }
        this.setState({ array })
    }

    mergeSort() {

        const animations = getMergeSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : '#0d5eff';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 2)
            }
        }
    }

    // turn red when about to be swapped
    // turn purple when pivot is comparing

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array)

        for (let i = 0; i < animations.length; i++) {

            const arrayBars = document.getElementsByClassName('array-bar')


            if (animations[i][1] === true) {
                setTimeout(() => {
                    const barColor = arrayBars[animations[i][0]].style
                    barColor.backgroundColor = 'red'
                }, i * 2)
            }

            if (animations[i][1] === false) {
                setTimeout(() => {
                    const barColor = arrayBars[animations[i][0]].style
                    barColor.backgroundColor = '#0d5eff'
                }, i * 2)
            }

            if (animations[i][2] === true) {
                setTimeout(() => {
                    const barColorOne = arrayBars[animations[i][0]].style
                    const barColorTwo = arrayBars[animations[i][1]].style
                    barColorOne.backgroundColor = 'red'
                    barColorTwo.backgroundColor = 'red'
                }, i * 2)
            }

            if (animations[i][2] === false) {
                setTimeout(() => {
                    const barColorOne = arrayBars[animations[i][0]].style
                    const barColorTwo = arrayBars[animations[i][1]].style
                    barColorOne.backgroundColor = '#0d5eff'
                    barColorTwo.backgroundColor = '#0d5eff'
                }, i * 2)
            }

            if (animations[i][4] === false) {
                setTimeout(() => {
                    const barOneIdx = animations[i][0]
                    const barTwoIdx = animations[i][1]

                    const barOneStyle = arrayBars[barOneIdx].style
                    const barTwoStyle = arrayBars[barTwoIdx].style

                    const tempHeight = barOneStyle.height
                    barOneStyle.height = barTwoStyle.height
                    barTwoStyle.height = tempHeight

                }, i * 2)
            }

        }


    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array)

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');

            if (animations[i].length === 5) {
                if (animations[i][4] === true) {
                    setTimeout(() => {
                        const barOneIdx = animations[i][0]
                        const barTwoIdx = animations[i][1]

                        const barOneStyle = arrayBars[barOneIdx].style
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barOneStyle.backgroundColor = 'red'
                        barTwoStyle.backgroundColor = 'red'
                    }, i * 4);
                }
                else {
                    setTimeout(() => {

                        const barOneIdx = animations[i][0]
                        const barTwoIdx = animations[i][1]

                        const barOneStyle = arrayBars[barOneIdx].style
                        const barTwoStyle = arrayBars[barTwoIdx].style

                        const tempHeight = barOneStyle.height
                        barOneStyle.height = barTwoStyle.height
                        barTwoStyle.height = tempHeight

                        barTwoStyle.backgroundColor = '#0d5eff'
                        barOneStyle.backgroundColor = '#0d5eff'
                    }, i * 4);
                }

            }

            if (animations[i].length === 6) {
                if (animations[i][4] === true) {
                    setTimeout(() => {
                        const barOneIdx = animations[i][0]
                        const barTwoIdx = animations[i][1]

                        const barOneStyle = arrayBars[barOneIdx].style
                        const barTwoStyle = arrayBars[barTwoIdx].style
                        barOneStyle.backgroundColor = 'red'
                        barTwoStyle.backgroundColor = 'red'
                    }, i * 4);
                }
                else {
                    setTimeout(() => {

                        const barOneIdx = animations[i][0]
                        const barTwoIdx = animations[i][1]

                        const barOneStyle = arrayBars[barOneIdx].style
                        const barTwoStyle = arrayBars[barTwoIdx].style

                        const tempHeight = barOneStyle.height
                        barOneStyle.height = barTwoStyle.height
                        barTwoStyle.height = tempHeight

                        barTwoStyle.backgroundColor = 'violet'
                        barOneStyle.backgroundColor = 'violet'
                    }, i * 4);
                }

            }
        }



    }
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array)
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');


            if (animations[i][4] === true) {
                setTimeout(() => {
                    const barOneIdx = animations[i][0]
                    const barTwoIdx = animations[i][1]

                    const barOneStyle = arrayBars[barOneIdx].style
                    const barTwoStyle = arrayBars[barTwoIdx].style
                    barOneStyle.backgroundColor = 'red'
                    barTwoStyle.backgroundColor = 'red'
                }, i * 2);
            }
            else {
                setTimeout(() => {

                    const barOneIdx = animations[i][0]
                    const barTwoIdx = animations[i][1]

                    const barOneStyle = arrayBars[barOneIdx].style
                    const barTwoStyle = arrayBars[barTwoIdx].style

                    const tempHeight = barOneStyle.height
                    barOneStyle.height = barTwoStyle.height
                    barTwoStyle.height = tempHeight

                    barTwoStyle.backgroundColor = '#0d5eff'
                    barOneStyle.backgroundColor = '#0d5eff'
                }, i * 2);
            }

        }
    }
    testSortingAlgorithms() {

        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);

            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
            const bubbleSortedArray = getBubbleSortAnimations(array.slice())
            // const heapSortedArray = getHeapSortAnimations(array.slice())
            // const quickSortedArray = getQuickSortAnimations(array.slice())
            // const mergeSortedArray = getMergeSortAnimations(array.slice());
            console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortedArray));
        }
    }

    render() {
        const { array } = this.state;

        return (

            <div className='array-container'>
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{ height: `${value}px` }}></div>

                ))}
                <div className='button-back'>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
                </div>
            </div>
        )
    }
}
function randomIntFromInterval(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }

    return true;

}