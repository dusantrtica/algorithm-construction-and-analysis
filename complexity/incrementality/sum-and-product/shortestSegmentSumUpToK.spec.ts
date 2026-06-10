import { describe, expect, it } from "vitest"
import { getPrefixSumArray } from "./consecutiveSumCounter.spec"

const shortestSegmentSumsUpToK = (input: number[], k: number): number => {
    const prefixSumArray = getPrefixSumArray(input);

    let minSegmentLength = prefixSumArray.length + 1;

    for (let i = 0; i < prefixSumArray.length; i++) {
        for (let j = i + 1; j < prefixSumArray.length; j++) {
            if (prefixSumArray[j] - prefixSumArray[i] >= k) {
                if (j - i < minSegmentLength) {
                    minSegmentLength = j - i;
                }
            }
        }
    }

    return minSegmentLength == prefixSumArray.length + 1 ? -1 : minSegmentLength;
}

describe('shortestSegmentSumsUpToK', () => {
    const inputArray = [1, -2, 3, 4, 5, 4, 3, 2, -1, 2]
    it('works for case 1', () => {
        expect(shortestSegmentSumsUpToK(inputArray, 15)).toBe(4)
    })

    it('works for case 2', () => {
        expect(shortestSegmentSumsUpToK(inputArray, 13)).toBe(3)
    });

    it('return -1 if no such segment exists', () => {
        expect(shortestSegmentSumsUpToK(inputArray, 30)).toBe(-1)
    });
})