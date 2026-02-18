import { describe, expect, it } from "vitest";

const closestRooms = (rooms: number[]): [number, number] => {
    rooms.sort((a, b) => Number(a) - Number(b));
    const n = rooms.length;
    let bestRooms: [number, number] = [rooms[0], rooms[1]];
    let minDistance = rooms[1] - rooms[0];
    for(let i = 0; i + 1 < n; i++) {
        if(rooms[i+1] - rooms[i] <= minDistance) {
            bestRooms = [rooms[i], rooms[i+1]];
            minDistance = rooms[i+1] - rooms[i];
        }
    }
    return bestRooms;
}

describe('closetRooms far away from the reception', () => {
    it('returns closest rooms far way from the reception', () => {
        const rooms = [18, 6, 25, 11, 4, 1, 16]
        expect(closestRooms(rooms)).toEqual([16, 18]);
    })
})