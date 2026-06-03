import { describe, expect, it } from "vitest";

const largestSaldo = (transactions: number[]) => {
    let maxSaldo = transactions[0];
    let currentSaldo = 0;

    for(const transaction of transactions) {
        currentSaldo += transaction;
        if(currentSaldo >= maxSaldo) {
            maxSaldo = currentSaldo;
        }
    }
    return maxSaldo;
}

describe("largestSaldo", () => {
    it('returns largest saldo', () => {
        expect(largestSaldo([1, -2, 3, 4, -1])).toBe(6);
    });

    it('returns largest saldo, when all transactions are negative', () => {
        expect(largestSaldo([-1, -2, -3, -4, -1])).toBe(-1);
    });
    
    it('returns largest saldo, when all transactions are positive', () => {
        expect(largestSaldo([1, 2, 3, 4, 1])).toBe(11);
    });

    it("returns largest saldo case from the example", () => {
        expect(largestSaldo([4, 2, -3, 5, -4])).toBe(8);
    });
});