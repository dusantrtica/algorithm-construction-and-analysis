// People were coming to the pool and leaving at [a, b) time
// given the list of intervals, return the max num of people being
// present at the time

import { describe, expect, it } from "vitest"

const maxNumOfPeopleAtPool = (intervals: [number,number][]): number => {
    const comingTimes = intervals.map((interval) => interval[0]).sort((a, b) =>Number(a) - Number(b));
    const leavingTimes = intervals.map(interval => interval[1]).sort((a, b) =>Number(a) - Number(b));
    const n = intervals.length;

    let maxNumPpl = 0;
    let currNumPpl = 0;

    let i = 0, j = 0;

    while(i < n && j < n) {
        if(comingTimes[i] < leavingTimes[j]) {
            currNumPpl += 1;
            i++;
        } else {
            currNumPpl -= 1;
            j++;
        }
        maxNumPpl = Math.max(maxNumPpl, currNumPpl);
    }

    return maxNumPpl;
}

describe('maxNumOfPeopleAtPool', () => {
    it('returns max num of people being present at the pool', () => {
        const timeline = [[3, 7], [7, 8], [2, 5], [6, 8], [4, 6], [1, 6], [4, 5], [1, 2]]
        expect(maxNumOfPeopleAtPool(timeline)).toBe(5);
    })

    it('returns 1 as no intervals overlap', () =>{
        const timeline = [[1,2], [3,4], [5,6], [7, 8]];
        expect(maxNumOfPeopleAtPool(timeline)).toBe(1);
    })
    it('returns max as all intervals are contained in another', () => {
        const timeline = [[1,10], [2, 9], [3, 8], [4, 7], [5, 6]]
        expect(maxNumOfPeopleAtPool(timeline)).toBe(5);
    })
})