import { describe, expect, it } from "vitest"

const calculateSkateMismatchProbability = (n: number): number => {
    let sign = 1;
    let factAccum = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        factAccum *= i;

        sum += sign * 1 / (factAccum);
        sign *= -1;
    }
    return 1-sum;
}

describe('calculateSkateMismatchProbability', () => {
    it('returns 0.5 as probability if there are 2 people that potentially swapped their skates', () => {
        expect(calculateSkateMismatchProbability(2)).toBe(0.5);
    })

    it('returns 0.367879464285714 when there are 10 people', () => {
        expect(calculateSkateMismatchProbability(10)).toBe(0.3678794642857143);
    })
})