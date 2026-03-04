import { describe, expect, it } from "vitest";
import { binSearch } from "./binsearch.spec";

const barCodeSearch = (codes: number[], codesToSearch: number[]) => {
    return codesToSearch
        .map(code => binSearch(codes, code, (a, b) => a -b))
        .filter(x => x > -1)
        .length;
}

describe('barCodesSearch', () => {
    it('returns 2 as only 2 codes are in the array', () => {
        expect(barCodeSearch([1, 3, 5, 6, 7], [2, 3, 4, 5, 8])).toBe(2);
    })
})