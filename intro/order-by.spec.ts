import { describe, it, expect } from "vitest";
import { orderBy } from "./order-by";

describe('orderBy', () => {
    it('orders array by listing firs odd and then even numbers', () => {
        const numbers = [2, 5, 3, 6, 1, 8, 9, 10, 11, 4];
        const predicate = (num: number) => num % 2 == 1

        expect(orderBy(numbers, predicate)).toEqual([11, 5, 3, 9, 1, 8, 6, 10, 2, 4])
    });
})