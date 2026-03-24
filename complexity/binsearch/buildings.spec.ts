import { describe, expect, it } from "vitest";

const canBeBuiltNoCloserThan = (xMeters: number, locations: number[], numOfBuildings: number): boolean => {
    let minDistance = 0;
    let buildingsBuiltSoFar = 1;
    for (let i = 1; i < locations.length; i++) {
        const distanceFromPrevBuilding = locations[i] - locations[i - 1];
        minDistance += distanceFromPrevBuilding;
        if (minDistance >= xMeters) {
            buildingsBuiltSoFar++
            minDistance = 0;
        }
        if (buildingsBuiltSoFar == numOfBuildings) {
            return true;
        }
    }
    return false;
}

const minDistanceBetweenBuildings = (locations: number[], numOfBuildings: number): number => {
    locations.sort((a, b) => Number(a) - Number(b));

    let l = 0, r = locations[locations.length-1] - locations[0];

    while(l < r) {
        let midDistance = l + Math.ceil((r - l) / 2);
        if(canBeBuiltNoCloserThan(midDistance, locations, numOfBuildings)) {
            l = midDistance;
        } else {
            r = midDistance-1;
        }
    }
    return l;
}

describe('minDistanceBetweenBuildings', () => {
    describe('canBeBuiltNoCloserThan', () => {
        const locations = [2, 4, 6, 9, 10, 12, 14];
        it('returns true for number of buildings 3 and distance 4 meters', () => {
            expect(canBeBuiltNoCloserThan(4, locations, 3)).toBe(true);
        })

        it('returns true for number of buildings 3 and distance 5 meters', () => {
            expect(canBeBuiltNoCloserThan(5, locations, 3)).toBe(true);
        })

        it('returns false for number of buildings 3 and distance 6', () => {
            expect(canBeBuiltNoCloserThan(6, locations, 3)).toBe(false);
        })
    })
    it('returns 5 for the following combinations of locations and number of buildings', () => {
        const numOfBuildings = 3;
        const locations = [9, 4, 6, 2, 10, 14, 12]

        expect(minDistanceBetweenBuildings(locations, numOfBuildings)).toBe(5);
    })
})