import { describe, expect, it } from "vitest"

const getNumOfStudentsWhoPassed = (points: number[], threshold: number): number => {

}

describe('getNumOfStudentsWhoPassed', () => {
    const studentResultsOnExam = [89, 73, 73, 56, 23]
    const testCases = [[95, 0], [50, 4], [70, 3], [0, 5]]
    it.each(testCases)(`returns $1 when threshold is $0`, (threshold, numOfStudentsPassed) => {
        expect(getNumOfStudentsWhoPassed(studentResultsOnExam, threshold)).toBe(numOfStudentsPassed)
    });
})