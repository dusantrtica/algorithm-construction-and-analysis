/**
 * We return number of ways to form 
 */

import { describe, expect, it } from "vitest";
import { binSearch } from "./binsearch.spec";
import { splittingPoint } from "./splittingPoint.spec";

const numCmp = (a: any, b: any) => Number(a) - Number(b);

const heightDifference = (heights: number[], r: number): number => {
    heights.sort(numCmp);
    let numOfPairs = 0;
    let i = 0;

    for(let height of heights) {
        const desiredHeight = height - r;
        const first = binSearch(heights, desiredHeight, numCmp);
        if(first > -1) {
            const second = splittingPoint(heights, (h) => h > desiredHeight);
            numOfPairs += (second - first);
        }
    }

    return numOfPairs;
}

describe('heightDifference', () => {
    it('return number of ways we choose 2 people such that their height differnce is r', () => {
        const heights = [13395, 15745, 15745, 16234, 18095]
        const r = 2350;

        expect(heightDifference(heights, r)).toBe(4);
    })
})