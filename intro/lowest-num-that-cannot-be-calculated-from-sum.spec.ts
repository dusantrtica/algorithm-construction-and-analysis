import { describe, it, expect } from "vitest";

const lowestNumThatCannotBeSummedFrom = (input: Array<number>): number => {
    let curSum = input[0];
    const n = input.length;
    for(let i = 1; i < n; i++) {
        if(input[i] > curSum+1) {
            break;
        } else {
            curSum += input[i];
        }
    }
    return curSum + 1;
}

describe('lowlowestNumThatCannotBeSummedFromest', () => {
    it('returns 12 for this case', ()=>{
        expect(lowestNumThatCannotBeSummedFrom([1, 2, 3, 5, 14, 20, 27])).toBe(12);
    });

    it('returns 30 for this combination', () => {
        expect(lowestNumThatCannotBeSummedFrom([1, 2, 4, 7, 15, 32, 35, 48])).toBe(30);
    });
})