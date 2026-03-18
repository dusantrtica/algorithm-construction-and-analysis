import { describe, expect, it } from "vitest";

const canSquareBeInside = (histogram: number[], edge: number) => {
    const n = histogram.length;
    let i = 0;
    let j = 0;
    while (i < n) {
        j = i;
        while (j < n && edge <= histogram[j]) {
            j++;
            if (j - i >= edge) {
                return true;
            }
        }
        i = j + 1;
    }
    return j - i >= edge;
}

const biggestSquareInHistogram = (histogram: number[]): number => {
    let l = 0;
    let r = histogram.length;

    while (l < r) {
        const mid = l + Math.ceil((r - l) / 2);
        if (canSquareBeInside(histogram, mid)) {
            l = mid;
        } else {
            r = mid-1;
        }
    }
    return l*l;
}

describe('biggestSquareInHistogram', () => {
    describe('canSquareBeInside', () => {
        it('returns true for square with edge len 3', () => {
            expect(canSquareBeInside([1, 5, 4, 4, 2], 3)).toBe(true);
        })

        it('returns false for square with edge len 4', () => {
            expect(canSquareBeInside([1, 5, 4, 4, 2], 4)).toBe(false);
        })

        it('returns true for square with edge len 2', () => {
            expect(canSquareBeInside([1, 5, 4, 4, 2], 2)).toBe(true);
        })
    })
    it('returns square of area 9', () => {
        expect(biggestSquareInHistogram([1, 5, 4, 4, 2])).toBe(9);
    })
})