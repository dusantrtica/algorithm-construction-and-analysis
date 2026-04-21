import { describe, expect, it } from "vitest";

const canTransmitMessageWithinTime = (voiceReach: number, time: number, messengers: number[]): boolean => {
    const n = messengers.length;
    let p = messengers[0] + time;
    for(let i = 1; i < n; i++) {
        if(p + voiceReach < messengers[i] - time) {
            return false;
        }
        p = p + voiceReach;
    }
    return true;
}

const minTimeToTransmitMessage = (voiceReach: number, messengers: number[]): number => {
    const n = messengers.length;
    let l = 0, r = messengers[n-1];

    while(l < r) {
        const midTime = l + (r - l)/2;
        if(canTransmitMessageWithinTime(voiceReach, midTime, messengers)) {
            r = midTime-0.01
        } else {
            l = midTime + 0.01
        }
    }
    return Number(r.toFixed(2));
}

describe('messengers', () => {
    describe('canTransmitMessageWithinTime', () => {
        it('returns true for the given layout and time limit of 1.5 seconds', () => {
            expect(canTransmitMessageWithinTime(3.0, 1.5, [0, 6])).toBe(true);
        })

        it('returns false for the given layout and time less than 1.5 sec', () => {
            expect(canTransmitMessageWithinTime(3.0, 1.3, [0, 6])).toBe(false);
        })

        it('returns true for the given layout and time limit of 1.5 seconds', () => {
            // layout 0, 4, 4, 8 of positions can be transformed to
            // [1, 3, 5, 7] after 1 seconds
            expect(canTransmitMessageWithinTime(2.0, 1, [0, 4, 4, 8])).toBe(true);
        })

        it('returns false for the given layout and time less than 1.5 sec', () => {
            expect(canTransmitMessageWithinTime(2.0, 0.8, [0, 4, 4, 8])).toBe(false);
        })
    })

    describe('minTimeToTransmitMessage', () => {
        it('case 1', () => {
            expect(minTimeToTransmitMessage(3.0, [0, 6])).toBe(1.5)
        })
        it('case 2', () => {
            expect(minTimeToTransmitMessage(2.0, [0, 4, 4, 8])).toBe(1);
        })
    })
})