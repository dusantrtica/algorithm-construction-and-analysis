import { describe, expect, it } from "vitest";

const numOfElementsDivisibleBy = (a: number, b: number, k: number): number => {

    const nl = Math.ceil(a/k);
    const nr = Math.floor(b/k);
    return nr - nl + 1;
}

describe('Number of elements in interval divisible by K', () => {
    it('returns 5 for interval 30-53 and k=5 as there are 5 numbers in that interaval divisible by 5', () => {
        expect(numOfElementsDivisibleBy(30, 53, 5)).toBe(5);
    });

    it('returns 1 when we have interval 29-31 and k = 5', () => {
        expect(numOfElementsDivisibleBy(29, 31, 5)).toBe(1);
    });

    it('returns 0 if there are no such numbers', () => {
        expect(numOfElementsDivisibleBy(27, 29, 5)).toBe(0);
    })
});