import { describe, expect, it } from "vitest";

type Area = {
    a: number,
    b: number
}

/**
 * 
 * @param area given area of a field
 * @param c number of meters that can be added to a and b so that new area is maximal
 * @returns maximal area
 */
const maximalYield = (area: Area, c: number) : number => {
    let { a, b } = area;
    const swap = (x: number, y: number) => {
        const tmp = x;
        x = y;
        y = tmp;
    }
    if (a > b) {
        swap(a, b);
    }
    if(c <= b - a) {
        a += c;
    } else {
        c -= (b-a);
        a += (b-a);
        if(c % 2 === 0) {
            a += Math.floor(c/2);
            b += Math.floor(c/2);
        } else {
            a += 1;
            c--;
            a += Math.floor(c/2);
            b += Math.floor(c/2);
        }
    }

    console.log({a, b});
    return a*b;
}

describe('maximalYield', () => {
    it('return new area, where c is added to only lesser axis', () => {
        expect(maximalYield({a: 5, b: 10}, 3)).toBe(80);
    });

    it('returns new area which we get close to a square and then ', () => {
        expect(maximalYield({a: 9, b: 10}, 4)).toBe(132);
    });

    it('returns new area that is 18x18, a square', () => {
        expect(maximalYield({a: 14, b: 17}, 5)).toBe(324);
    });


})