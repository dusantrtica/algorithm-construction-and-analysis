import { describe, expect, it } from "vitest"

const harmonyPi = (n: number): number[] => {
    let sign = 1;
    let denominator = 1;
    let sum = 0;
    const piValues = []
    for (let i = 0; i < n; i++) {
        sum += sign * 1 / denominator;
        sign *= -1;
        denominator += 2;
        piValues.push(+(sum*4).toFixed(5));
    }
    return piValues;
}

describe('harmonyPi', () => {
    it('calculates values of pi for the first 5 numbers', () => {
        expect(harmonyPi(5)).toEqual([
            4.00000,
            2.66667,
            3.46667,
            2.89524,
            3.33968])
    });
})