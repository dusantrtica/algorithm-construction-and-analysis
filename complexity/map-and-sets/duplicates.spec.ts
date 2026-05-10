import { describe, expect, it } from "vitest"

const countUnique = (elements: String[]): number => {
    return new Set([...elements]).size
}

describe('duplicates', () => {
    it('returns number of duplicates', () => {
        expect(countUnique(['123', '2423', '352345', '123', '2423', '1'])).toBe(4)
    })
})