import { describe, expect, it } from "vitest"

type Point = {
    x: number,
    y: number
}

const zoneWidthToRadius = (zones: number[]): number[] => {
    let radiuses = [zones[0]]
    for(let i = 1; i < zones.length; i++) {
        radiuses.push(radiuses[i-1] + zones[i])
    }
    return radiuses;
}

const distanceFrom = (point: Point): number => {
    return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}

const zoneInCircle = (zones: number[], point: Point): number => {
    const radiuses = zoneWidthToRadius(zones);
    const n = zones.length;
    const distance = distanceFrom(point);    
    let l = 0, r = n;
    while(l < r) {
        const mid = Math.floor((l+r)/2);
        const midElem = radiuses[mid];

        if(distance <= midElem) {
            r = mid;
        } else {
            l = mid+1;
        }
    }
    return l;
}

describe('zonesInCircle', () => {
    const zones = [2.0, 3.0, 7.0]
    const points: Point[] = [[1, 1], [2, 3], [8, 7], [13.2, 14.5], [0, 12]].map((pt) => ({ x: pt[0], y: pt[1] }))
    const expectedValues = [0, 1, 2, 3, 2]
    const testCases = points.map((pt, i) => [pt, expectedValues[i]]);    
    it.each(testCases)(`Returns $1 for point $0`, (point, zone) => {
        expect(zoneInCircle(zones, point as Point)).toBe(zone);
    })
})