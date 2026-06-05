import { describe, expect, it } from "vitest"

const allFactoriels = (n: number): number[] => {
    let acc = 1;
    const factoriels = [];
    for (let i = 1; i <= n; i++) {
        acc *= i;
        factoriels.push(acc);

    }
    return factoriels;
}

describe('allFactoriels', () => {
    it('returns array of all number factoriels till number 4', () => {
        expect(allFactoriels(4)).toEqual([1, 2, 6, 24])
    })
})