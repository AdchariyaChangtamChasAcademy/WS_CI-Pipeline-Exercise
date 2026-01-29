const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator functions', () => {
    
    describe('add', () => {
        test('should add two positive numbers', () => {
            expect(add(1, 2)).toBe(3);
            expect(add(10, 20)).toBe(30);
        });
        
        test('should add negative numbers', () => {
            expect(add(-1, -2)).toBe(-3);
        });
        
        test('should handle decimals', () => {
            expect(add(10.3, 2.6)).toBe(12.9);
        });
    });
    
    describe('subtract', () => {
        test('should subtract two numbers', () => {
            expect(subtract(5, 2)).toBe(3);
            expect(subtract(30, 20)).toBe(10);
        });
        
        test('should handle negative results', () => {
            expect(subtract(1, 2)).toBe(-1);
        });
    });
    
    describe('multiply', () => {
        test('should multiply two numbers', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(10, 100)).toBe(1000);
        });
        
        test('should multiply by zero', () => {
            expect(multiply(1, 0)).toBe(0);
        });
        
        test('should multiply negative numbers', () => {
            expect(multiply(3, -2)).toBe(-6);
        });
    });
    
    describe('divide', () => {
        test('should divide two numbers', () => {
            expect(divide(10, 2)).toBe(5);
      expect(divide(9, 3)).toBe(3);
        });
        
        test('should handle decimals', () => {
            expect(divide(10, 3)).toBeCloseTo(3.33, 2);
        });
        
        test('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
            expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
        });
    });
});