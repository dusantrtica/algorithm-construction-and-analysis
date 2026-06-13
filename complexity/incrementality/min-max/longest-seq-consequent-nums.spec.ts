import { describe, expect, it } from "vitest";

const longestSequenceOfConsequentNumbers = (input: number[]): number => {
    const n = input.length;
    let longestSequenceLen = 0;
    for (let i = 0; i < n - 1; i++) {
        let max = input[i]
        let min = input[i];
        for (let j = i + 1; j < n; j++) {
            max = Math.max(max, input[j])
            min = Math.min(min, input[j])
            if (max - min === j - i) {
                longestSequenceLen = Math.max(longestSequenceLen, max - min);
            }
        }
    }

    return longestSequenceLen + 1;
}

describe('longestSequenceOfConsequentNumbers', () => {
    it('returns 5 as there is subsequence numbers of length 5', () => {
        expect(longestSequenceOfConsequentNumbers([
            55, 56, 58, 57, 90, 92, 94, 93, 91, 59, 60
        ])).toBe(5);
    })
})