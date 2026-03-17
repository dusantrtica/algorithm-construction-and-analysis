import { describe, expect, it } from "vitest"

const hirschIndex = (publications: number[]): number => {
    publications.sort((a, b) => Number(a) - Number(b));

    const n = publications.length;

    let l = 0, r = n;
    while (l < r) {
        const mid = l + Math.ceil((r - l) / 2);
        const midElem = publications[mid];

        if (midElem > n - mid) {
            r = mid - 1
        } else {
            l = mid;
        }
    }

    return n - l;
}

describe('hirschIndex', () => {
    it('returns hirsh index for given set of publications', () => {
        expect(hirschIndex([3, 5, 12, 7, 5, 9, 0, 17])).toBe(5);
    })
})