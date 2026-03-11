import { describe, expect, it } from "vitest";
import { closestElement } from "./closestElement.spec";

const kNearest = (ratings: number[], k: number, rating: number): number => {
    const closestElemIdx = closestElement(ratings, rating);
    const n = ratings.length;
    let l = closestElemIdx - 1;
    let r = closestElemIdx + 1;

    while (k > 1) {
        if (l < 0) {
            r++;
        } else if (r >= n) {
            l--;
        }
        else if (Math.abs(ratings[l] - rating) <= Math.abs(ratings[r] - rating)) {
            l--;
        } else {
            r++;
        }
        k--;
    }

    return l + 1;
}

describe('kNearest', () => {
    const ratings = [3, 5, 7, 9, 11, 13];
    const testCases = [
        [[1, 3], 0],
        [[6, 3], 0],
        [[8, 3], 1],
        [[11, 3], 3],
        [[13, 3], 3],
        [[19, 3], 3],
    ]
    it.each(testCases)('returns $1 for competee when $0', (competition: [number, number], competeeWithLowestRankingIdx: number) => {
        const [competitorRanking, numberOfParticipants] = competition;
        expect(kNearest(ratings, numberOfParticipants, competitorRanking)).toBe(competeeWithLowestRankingIdx);
    })
})