import { describe, expect, it } from "vitest"

const getLargestNotGreaterThan = (items: number[], limit: number): number => {
    const n = items.length;
    let l = 0, r = n - 1;
    while (l < r) {
        let mid = Math.ceil((l + r) / 2);
        const midElem = items[mid];

        if (midElem === limit) {
            return mid;
        } else if (midElem < limit) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l === r ? l : l - 1;
}

const getMostValuableItems = (keyboards: number[], mouses: number[], budget: number): number => {
    keyboards.sort((a, b) => Number(a) - Number(b));

    let maxValue = 0;

    for (let mouse of mouses) {
        const kbIdx = getLargestNotGreaterThan(keyboards, budget - mouse);
        const totalCurrentValue = keyboards[kbIdx] + mouse;
        if (totalCurrentValue < budget && totalCurrentValue > maxValue) {
            maxValue = totalCurrentValue;
        }
    }
    return maxValue;
}

describe('get the most expensive equip within the budget', () => {
    it('returns pair of the most expensive stuff within the budget', () => {
        expect(getMostValuableItems([5, 8, 2], [3, 1], 10)).toEqual(9)
    })
})