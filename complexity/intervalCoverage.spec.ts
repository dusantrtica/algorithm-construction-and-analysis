import { describe, expect, it } from "vitest";

type Interval = [number, number];

const isOverlapping = (i1: Interval, i2: Interval): boolean => {
    return i1[1] >= i2[0];
}

const intervalCoverage = (intervals: Interval[]): { len: number, intervals: Interval[] } => {
    intervals.sort((i1, i2) => {
        return Number(i1[0]) - Number(i2[0]);
    });

    const n = intervals.length;
    let i = 0;
    const joinedIntervals: Interval[] = []

    while (i < n-1) {
        const currInterval = intervals[i];
        while (isOverlapping(currInterval, intervals[i+1])) {
            currInterval[1] = intervals[i+1][1];
            i++;
        }
        joinedIntervals.push(currInterval)
        i++;
    }

    joinedIntervals.push(intervals[i])

    return {
        len: joinedIntervals.reduce((acc, interval) => acc += (interval[1] - interval[0]), 0),
        intervals: joinedIntervals
    };
}

describe('intervalCoverage', () => {
    it('returns 6 of total len and 2 as num of new intervals after joining them', () => {
        expect(intervalCoverage([[1, 3], [5, 8], [2, 4]])).toEqual({
            len: 6,
            intervals: [[1, 4], [5, 8]]
        })
    })
})