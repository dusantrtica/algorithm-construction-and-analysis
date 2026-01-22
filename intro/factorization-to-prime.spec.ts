import { describe, expect, it } from "vitest";

const factorizeToPrimes = (n: number): Array<number> => {
    const constituents: Array<number> = []

    let i = 2;
    while(n > 1) {
        while(n % i == 0) {
            constituents.push(i);
            n = Math.floor(n / i); 
        }
        i++;
        
    }
    return constituents;
}

describe('Factorization', () => {
    it('disolves number to its prime constituents', () => {
        expect(factorizeToPrimes(900)).toEqual([2,2,3,3,5,5])
    })
})