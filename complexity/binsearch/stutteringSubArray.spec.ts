import { describe, expect, it } from "vitest";

const isSubArray = (s: string, t: string, n: number): boolean => {
    let i = 0, j = 0;
    let currCnt = 1;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            currCnt++;
            if (currCnt === n) {
                currCnt = 0;
                i++;
            }
        }
        j++;
    }
    return i === s.length;
}

const maxNForStutteringSubArray = (s: string, t: string): number => {
    let l = 0, r = t.length;
    while (l < r) {
        const n = l + Math.ceil((r - l) / 2);
        if (isSubArray(s, t, n)) {
            l = n
        } else {
            r = n - 1;
        }
    }
    return l;
}

describe('stutteringSubarray', () => {
    describe('maxNForStutteringSubArray', () => {
        it('returns 3 as that is the max N for which s^n is part of t', () => {
            expect(maxNForStutteringSubArray('xyz', 'xaxxybyxyxzyzzb')).toBe(3);
        })
    })
    describe('isSubArray', () => {
        it('returns true for the sample of n = 2', () => {
            expect(isSubArray('xyz', 'xaxxybyxyxzyzzb', 2)).toBe(true);
        });
        it('returns true for the sample of n = 3', () => {
            expect(isSubArray('xyz', 'xaxxybyxyxzyzzb', 3)).toBe(true);
        });

        it('returns false for the sample when n = 4', () => {
            expect(isSubArray('xyz', 'xaxxybyxyxzyzzb', 4)).toBe(false);
        })
    })
})
