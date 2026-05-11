import { describe, expect, it } from "vitest";

const pairlessElementWithSet = (elements: number[]): number => {
    const elementsThatAppearOnce = new Set()

    for(const elem of elements) {
        if(elementsThatAppearOnce.has(elem)) {
            elementsThatAppearOnce.delete(elem)
        } else {
            elementsThatAppearOnce.add(elem);
        }
    }
    return elementsThatAppearOnce.values().next().value    
}

const pairlessElement = (elements: number[]): number => {
    const elementsCount: Map<number, number> = new Map();

    for(const elem of elements) {
        elementsCount.set(elem, (elementsCount.get(elem) ?? 0) + 1)
    }

    for(const pairs of elementsCount.entries()) {        
        if(pairs[1] === 1) {
            return pairs[0];
        }
    }

    return -1;
}

describe('pairlessElement', () => {
    it('returns pairless element', () =>{
        expect(pairlessElement([1,3,2,1,2])).toBe(3);
    })

    it('returns pairless element, implementation with set', () =>{
        expect(pairlessElementWithSet([1,3,2,1,2])).toBe(3);
    })
})