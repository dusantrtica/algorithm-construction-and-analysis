import { describe, expect, it } from "vitest";

const divisibleAroundInterval = (n: number, k: number): { l: number, r: number } => {
    let l = 0, r = 0;
    if (n % k === 0) {
        l = r = n;
    } else {
        l = Math.floor(n / k) * k;
        r = Math.floor((n + k) / k) * k;
    }
    return { l, r };
}

describe('Numbers around interval, divisible by k', () => {
    it('returns numbers divisible by K close by N', () => {
        expect(divisibleAroundInterval(23, 5)).toEqual({
            l: 20,
            r: 25
        });
    });

    it('returns numbers divisible by K close N, when N is divisible by K', () => {
        expect(divisibleAroundInterval(49, 7)).toEqual({
            l: 49,
            r: 49
        })
    })
})
