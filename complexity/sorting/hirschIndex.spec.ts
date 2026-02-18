import { describe, expect, it } from "vitest";

const hirschIndex = (publications: number[]): number => {
    publications.sort((a, b) => Number(a) - Number(b));

    const n = publications.length;

    for (let i = n - 1; i >= 0; i--) {
        if (n - i >= publications[i]) {
            return n - i;
        }
    }

    return 0;
}

describe('Hirsch index', () => {
    it('returns hirsch index for the following input', () => {
        expect(hirschIndex([3, 5, 12, 7, 5, 9, 0, 17])).toBe(5);
    })
});