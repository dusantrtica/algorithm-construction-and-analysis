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

const canMakeNumberOfPortions = (cacheAmount: number, ingredients: Ingredient[], portions: number): boolean => {
    let totalCost = 0;
    for (const ingredient of ingredients) {
        let needed = ingredient.M * portions;
        if (ingredient.M0 >= needed) {
            continue; // we have enough of ingredients stocked in the kitchen            
        }

        needed -= ingredient.M0;
        const maxNumOfBigPackages = Math.ceil(needed / ingredient.mv);

        let bestCost = Number.MAX_SAFE_INTEGER;

        for (let big = 0; big <= maxNumOfBigPackages; big++) {
            const rem = Math.max(0, needed - big * ingredient.mv);
            const small = Math.ceil(rem / ingredient.mm);

            const cost = big * ingredient.cv + small * ingredient.cm;
            if (cost < bestCost) {
                bestCost = cost;
            }
        }

        totalCost += bestCost;
        if (totalCost > cacheAmount) {
            return false;
        }
    }
    return totalCost <= cacheAmount;
}

const maxNumberOfPortions = (cacheAmount: number, ingredients: Ingredient[]): number => {
    return 0;
}

describe('Max number of portions', () => {
    describe('canMakenumberOfPortions', () => {
        const ingredients = [
            arrayToIngredient([10, 8, 10, 10, 13, 11]),
            arrayToIngredient([12, 20, 6, 10, 17, 24])
        ]
        const cacheAmount = 100;

        it('returns true for 100 dinars and portions number 4', () => {
            expect(canMakeNumberOfPortions(cacheAmount, ingredients, 4)).toBe(true);
        })

        it('returns true for 100 dinars and portions number 5', () => {
            expect(canMakeNumberOfPortions(cacheAmount, ingredients, 5)).toBe(true);
        })

        it('returns false for 100 dinars and 6 portions', () => {
            expect(canMakeNumberOfPortions(cacheAmount, ingredients, 6)).toBe(false);
        })
    });
    it('returns 5', () => {
        const ingredients = [
            arrayToIngredient([10, 8, 10, 10, 13, 11]),
            arrayToIngredient([12, 20, 6, 10, 17, 24])
        ]
        const cacheAmount = 100;

        expect(maxNumberOfPortions(cacheAmount, ingredients)).toBe(5)
    })
})