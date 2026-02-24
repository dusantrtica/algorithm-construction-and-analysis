/**
 * Given N points in the plane, return number of squares that those points
 * can form.
 */

import { describe, expect, it } from "vitest";
import { binSearch } from "./barCodeSearch.spec";

type Point = {
    x: number,
    y: number
}

const pointsFromArray = (pts: [number, number][]): Point[] => {
    return pts.map(pt => ({
        x: pt[0],
        y: pt[1]
    }))
}

const ptsCmp = (pt1: Point, pt2: Point) => {
    if (pt1.x === pt2.x) {
        return pt1.y - pt2.y;
    }
    return pt1.x - pt2.x;
}

const isEqual = (p1: Point, p2: Point) => ptsCmp(p1, p2) === 0;

const isPointInPoints = (point: Point, points: Point[]): boolean => {
    return binSearch(points, point, ptsCmp) > -1;
}

const calculatePointsOfSquare = (p1: Point, p2: Point): [Point, Point, Point,Point] => {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    return [
        {
            x: p1.x - dy,
            y: p1.y + dx
        },
        {
            x: p2.x - dy,
            y: p2.y + dx
        },
        {
            x: p1.x + dy,
            y: p1.y - dx
        },
        {
            x: p2.x + dy,
            y: p2.y - dx
        },
    ]
}

const numOfSquares = (points: Point[]): number => {
    points.sort(ptsCmp);

    // For each 2 points that might form the edge, we calculate
    // what the next 2 points sould look like (coordinates)
    // and check if there are such 2 points in the array

    const n = points.length;
    let numOfSquares = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {            
            const [p3, p4, p5, p6] = calculatePointsOfSquare(points[i], points[j]);
            if (isPointInPoints(p3, points) && isPointInPoints(p4, points)) {                
                numOfSquares += 1;
            }

            if (isPointInPoints(p5, points) && isPointInPoints(p6, points)) {                
                numOfSquares += 1;
            }
        }
    }

    return Math.ceil(numOfSquares/4);
}

describe('number of squares that can be formed from array of points', () => {
    it('returns 3 as there are 3 squares which can be formed from points', () => {
        const points = pointsFromArray(
            [[-1, 1], [0, 1], [1, 1], [-1, 0], [0, 0], [1, 0], [0, -1]]
        )

        expect(numOfSquares(points)).toBe(3);
    })
});