import { describe, expect, it } from "vitest";

const existsConsecutiveArrayThatSatisfies = <T>(
    input: Array<T>,
    k: number,
    predicate: (x: T) => boolean
): boolean => {
    const n = input.length;
    let elementsCntThatSatisfy = 0;
    for(let i = 0; i < n; i++) {
        if(predicate(input[i])) {
            elementsCntThatSatisfy++;
            if(elementsCntThatSatisfy >= k) {
                return true;
            }
        } else {
            elementsCntThatSatisfy = 0;
        }
    }
    return elementsCntThatSatisfy >= k;
}

describe('existsConsecutiveArrayThatSatisfies', () => {
    it('return true for array of numbers and predicate is that value is > 30', () => {
        const pts = [5,38,30,32,28,35];
        expect(existsConsecutiveArrayThatSatisfies(pts, 3, (x) => x >= 30)).toBe(true);
    });

    it('returns true when the subarray is at the end', () => {
        const pts = [5,38,29,32,30,35];
        expect(existsConsecutiveArrayThatSatisfies(pts, 3, (x) => x >= 30)).toBe(true);
    })
})