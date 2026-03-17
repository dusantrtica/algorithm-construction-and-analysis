import { describe, expect, it } from "vitest";

const allCharsPresentInSubstringOfLength = (
    text: string,
    chars: string,
    len: number
): boolean => {
    for (let i = 0; i < text.length - len+1; i++) {
        const subString = text.slice(i, i + len);
        let foundNonExistingChar = false;
        for (let c of chars) {
            if (subString.includes(c) === false) {
                foundNonExistingChar = true;
            }
        }
        if (foundNonExistingChar === false) {
            return true;
        }
    }
    return false;
}

const shortestSubStringWithAllChars = (text: string, chars: string): number => {
    let l = 0, r = text.length+1;
    let found = false;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (allCharsPresentInSubstringOfLength(text, chars, mid)) {
            r = mid;
            found = true;
        } else {
            l = mid + 1;
        }
    }

    return found ? r : 0;
}

describe('shortestSubStringWith All chars', () => {
    describe('allCharsPresentInSubstringOfLength', () => {
        it('returns true when those subsets are the same', () => {
            expect(allCharsPresentInSubstringOfLength("abcdefg", "abcdefg", 7)).toBe(true);
        })
    })
    it('returns the length of the shortest substring that contains all chars', () => {
        const text = "dobardansvimakakoste";
        const sample = "arnk";

        const lengthOfSubstring = shortestSubStringWithAllChars(text, sample);
        expect(lengthOfSubstring).toBe(10);
    })

    it("returns false when it is not possible to find subset", () => {
        expect(shortestSubStringWithAllChars("abababababa", "abc")).toBe(0);
    })

    it("returns the lenght of the string", () => {
        expect(shortestSubStringWithAllChars("abcdefg", "abcdefg")).toBe(7);
    })
})