/**
 Array of phone numbers is the proper is no two of them have the common prefix
 */

import { describe, expect, it } from "vitest"

const isSetProper = (phoneNumbers: string[]): boolean => {
    phoneNumbers.sort();
    const n = phoneNumbers.length;
    for(let i = 0; i < n-1; i++) {
        if(phoneNumbers[i+1].includes(phoneNumbers[i])) {
            return false;
        }
    }
    return true;
}

describe('isSetProper', () => {
    it('return false if set is not proper - if at least two phone numbers share common prefix', () => {
        const phoneNumbers = ["192", "194", "199342", "192865",]
        expect(isSetProper(phoneNumbers)).toBe(false)
    });

    it('returns true of proper set of phone numbers', () => {
        const phoneNumbers = [
            "199342",
            "193865",
            "192",
            "194",
        ]
        expect(isSetProper(phoneNumbers)).toBe(true);
    })
})
