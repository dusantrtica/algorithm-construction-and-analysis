import { describe, expect, it } from "vitest";

const gcd = (a: number, b: number): number => {
    if(a === b) {
        return a;
    }

    if(a > b) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    return gcd(b-a, a);
}

const gcdIter = (a: number, b: number): number => {
    while(b > 0) {
        const tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
}

describe('gcd', () => {
    it('calculates gcd for 46 and 18', ()=>{
        expect(gcd(18, 46)).toBe(2)
        expect(gcdIter(18, 46)).toBe(2);
        expect(gcd(279, 45)).toBe(9);
        expect(gcdIter(279, 45)).toBe(9)
    })

})