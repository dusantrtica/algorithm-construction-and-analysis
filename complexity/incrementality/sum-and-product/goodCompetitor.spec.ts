import { describe, expect, it } from "vitest";

/**
 *  Competitor is "good" if there is no competitor
 * who earned more points from both math and programming
 */

const numOfGoodCompetitors = (points: number[][]): number => {
    points.sort((pt1, pt2) => {
        if(pt1[0] === pt2[0]) {
            return pt1[1] - pt2[1]
        }
        return pt2[0] - pt1[0];
    })
    let maxCSPts = 0;
    let count = 0;

    console.log(points)

    for(let i = 0; i < points.length; i++) {
        if(points[i][1] >= maxCSPts) {
            count++;
            maxCSPts = points[i][1]
        }
    }
    return count;
}

describe('numOfGoodCompetitors', () => {
    it('returns 5 as there 5 good competitors', () => {
        const points = [
            [2, 4],
            [9, 3],
            [7, 6],
            [3, 7],
            [7, 2],
            [3, 9],
            [4, 9],
            [6, 4],
            [6, 8],
        ]
        expect(numOfGoodCompetitors(points)).toBe(5);
    })
})
