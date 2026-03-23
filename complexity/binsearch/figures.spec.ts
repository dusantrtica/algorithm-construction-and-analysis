import { describe, expect, expectTypeOf, it } from "vitest"

const canKPlayersPlay = (figureValues: number[], k: number, limit: number): boolean => {
    for (let i = 0; i + k - 1 < figureValues.length; i++) {
        if (k * figureValues[i + k-1] - k * figureValues[i] <= limit) {
            return true;
        }
    }

    return false;
}

const numberOfPlayingPieces = (figureValues: number[], limit: number): number => {
    let l = 0, r = figureValues.length;

    figureValues.sort((a, b)=> Number(a) - Number(b));

    while(l < r) {
        const mid = l + Math.ceil((r - l) / 2);
        if(canKPlayersPlay(figureValues,mid, limit)) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

describe('numberOfPlayingPieces', () => {
    describe('canKPlayersPlay', () => {
        const figurevalues = [2, 3, 4, 5, 7];
        const limit = 15;
        it('returns true for 4 players', () => {
            expect(canKPlayersPlay(figurevalues, 4, limit)).toBe(true);
        })
        it('returns false for 5 players', () => {
            expect(canKPlayersPlay(figurevalues, 5, limit)).toBe(false);
        })
    })
    it('returns 4 as the max number of playing pieces such that power diff is less than 15', () => {
        const limit = 15;
        expect(numberOfPlayingPieces([5, 4, 2, 7, 3], limit)).toBe(4);
    })
})