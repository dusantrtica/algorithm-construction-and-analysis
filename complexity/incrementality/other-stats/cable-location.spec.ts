import { describe, expect, it } from "vitest"
import { getPrefixSumArray } from "../sum-and-product/consecutiveSumCounter.spec";

const centralNodeLocationNaive = (cablesPerLocation: number[][]): [number, number] => {
    const n = cablesPerLocation.length;
    const m = cablesPerLocation[0].length;

    const distance = (x: number, y: number, i: number, j: number) => {
        return Math.abs(x - i) + Math.abs(y - j);
    }

    const cablesLengthAt = (x: number, y: number): number => {
        let cablesLength = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                cablesLength += cablesPerLocation[i][j] * distance(x, y, i, j);
            }
        }
        return cablesLength;
    }

    let minX = 0, minY = 0;
    let minLength = cablesLengthAt(0, 0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let cablesLength = cablesLengthAt(i, j);
            if (cablesLength < minLength) {
                minLength = cablesLength;
                minX = i;
                minY = j;
            }
        }
    }

    return [minX, minY]
}

const weightnedDistance = (values: number[], pos: number): number => {
    let currWeight = 0;
    for(let i = 0; i < values.length; i++) { 
        currWeight += (Math.abs(pos - i) * values[i])
    }

    return currWeight;
}

const indexOfWeightnedMedian = (values: number[]): number => {
    const prefixSum = getPrefixSumArray(values)
    let i = 0;
    let weight = weightnedDistance(values, i);
    let minWeight = weight;
    let minWeightIndex = i;
    for(i = 1; i < values.length; i++) {
        weight += prefixSum[i];
        weight -= (prefixSum[values.length] - prefixSum[i]);

        if(weight < minWeight) {
            minWeight = weight;
            minWeightIndex = i;
        }
    }

    return minWeightIndex;
}

const centralNodeLocation = (cablesPerLocation: number[][]): [number, number] => {
    const n = cablesPerLocation.length;
    const m = cablesPerLocation[0].length;

    const rowsWeights = []
    const columnWeights = [];

    for(let i = 0; i < n; i++) {
        rowsWeights.push(cablesPerLocation[i].reduce((prev, curr) => prev + curr, 0));
    }

    for(let j = 0; j < m; j++) {
        let tmpSum = 0;
        for(let i = 0; i < n; i++) {
            tmpSum += cablesPerLocation[i][j];
        }
        columnWeights.push(tmpSum);
    }

    console.log(rowsWeights);
    console.log(columnWeights);

    return [indexOfWeightnedMedian(rowsWeights), indexOfWeightnedMedian(columnWeights)]
}

describe('centralNodeLocation', () => {
    describe('indexOfWeightnedMedian', () => {
        it('returns middle element when all values are equal', () => {
            expect(indexOfWeightnedMedian([1,1,1,1,1])).toBe(2);
        })
        it('returns index of the element of the biggest value when it is dominant', () => {
            expect(indexOfWeightnedMedian([1,1,1,4])).toBe(3);
        })

        it('returns index of the element of the biggest value when it is dominant', () => {
            expect(indexOfWeightnedMedian([5, 6, 5, 6 ])).toBe(1);
        })

    })
    it('returns location for the building where the main node should be', () => {
        const cablesPerLocation = [
            [2, 1, 1, 4],
            [1, 3, 2, 1],
            [2, 2, 2, 1]
        ]
        expect(centralNodeLocationNaive(cablesPerLocation)).toEqual([1, 1])
        expect(centralNodeLocation(cablesPerLocation)).toEqual([1, 1])
    })

    it('returns location for simple case', () => {
        const cablesPerLocation = [
            [1, 1],
            [1, 2]
        ]
        expect(centralNodeLocationNaive(cablesPerLocation)).toEqual([1, 1])
        expect(centralNodeLocation(cablesPerLocation)).toEqual([1, 1])
    })
})
