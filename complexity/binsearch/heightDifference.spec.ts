/**
 * We return number of ways to form 
 */

import { describe, expect, it } from "vitest";
import { binSearch } from "./barCodeSearch.spec";

const numCmp = (a: any, b: any) => Number(a) - Number(b);

const firstSmallerThan = (heights: number[], r: number): number => {
    
}

const heightDifference = (heights: number[], r: number): number => {
    heights.sort(numCmp);
    let numOfPairs = 0;
    let i = 0;

    while(i < heights.length) {
        let idx = binSearch(heights, Math.abs(r - heights[i]), numCmp);
        if(idx >= 0) {            
            while(i < heights.length && Math.abs(heights[i]-heights[idx]) === r) {
                numOfPairs++;
                i++;
            }
        } else {
            i++;
        }        
    }

    return numOfPairs;
}

describe('heightDifference', () => {
    it('return number of ways we choose 2 people such that their height differnce is r', () => {
        const heights = [15745, 18095, 15745, 16234, 13395]
        const r = 2350;

        for(let i = 0; i < heights.length; i++) {
            for(let j = 0; j < heights.length; j++) {
                if(Math.abs(heights[i] - heights[j]) === r) {
                    console.log(heights[i], heights[j])
                }
            }
        }

        expect(heightDifference(heights, r)).toBe(4);
    })
})