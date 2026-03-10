import { describe, expect, it } from "vitest"
import { closestElement } from "./closestElement.spec";

const optimalServiceTime = (mileages: number[]): number => {
    const totalMileages = [...mileages];
    for (let i = 1; i < mileages.length; i++) {
        totalMileages[i] = totalMileages[i - 1] + totalMileages[i];
    }

    const halfWay = totalMileages[totalMileages.length - 1] / 2
    return closestElement(totalMileages, halfWay);
}

describe('optimalServiceTime', () => {
    it('returns the optimal day in which service should be done', () => {
        const mileages = [100, 120, 50, 150, 70]
        expect(optimalServiceTime(mileages)).toBe(1)
    })
})