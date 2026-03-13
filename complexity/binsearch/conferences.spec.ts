import { describe, expect, it } from "vitest";

const allCompaniesPresentInSubsetOfTalks = (
    schedule: number[],
    numOfConsecutiveTalks: number,
    numOfCompanies: number
): boolean => {
    for (let i = 0; i < schedule.length - numOfConsecutiveTalks; i++) {
        const companiesInSetOfTalks = new Set(schedule.slice(i, i + numOfConsecutiveTalks))
        if (companiesInSetOfTalks.size === numOfCompanies) {
            return true;
        }
    }

    return false;
}

const minNumOfTalks = (schedule: number[], numOfCompaines: number): number => {
    let l = numOfCompaines, r = schedule.length;

    while (l < r) {
        const mid = l + Math.ceil((r - l) / 2);
        if(allCompaniesPresentInSubsetOfTalks(schedule, mid, numOfCompaines)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return r;
}

describe('minNumOfTalks', () => {
    it('returns minimal number of consecutive talks to listen through all companies', () => {
        const schedule = [4, 2, 4, 3, 3, 2, 2, 4, 2, 2, 3, 3, 1, 3, 3, 1, 4, 4, 1, 4]
        const numOfCompanies = 4
        expect(minNumOfTalks(schedule, numOfCompanies)).toBe(6);
    })
});