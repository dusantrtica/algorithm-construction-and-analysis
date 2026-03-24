import { describe, expect, it } from "vitest";

type Ingredient = {
    M: number, // mass of ingr. required for one portion
    M0: number, // mass of ingr. available in kitchen
    mm: number, // smaller package mass
    cm: number, // smaller package price
    mv: number, // bigger package mass
    cv: number // bigger package price
}

const arrayToIngredient = (input: number[]): Ingredient => {
    const [M, M0, mm, cm, mv, cv] = input;
    return {
        M, M0, mm, cm, mv, cv
    }
}

const maxNumberOfPortions = (cacheAmount: number, ingredients: Ingredient[]): number => {
    return 0;
}

describe('Max number of portions', () => {
    it('returns 5', () => {
        const ingredients = [
            arrayToIngredient([10, 8, 10, 10, 13, 11]),
            arrayToIngredient([12,20, 6, 10, 17, 24])
        ]
        const cacheAmount = 100;

        expect(maxNumberOfPortions(cacheAmount, ingredients)).toBe(5)
    })
})