import {it, expect, describe} from 'vitest';
import { divide } from './index.js';


describe('divide()', () => {
    it("should correctly divides two positive numbers.", () => {
      const result = divide(6, 3);
      expect(result).toBe(2);
    });

    it("should correctly divides two negative numbers.", () => {
      const result = divide(-6, -3);
      expect(result).toBe(2);
    });

    it("should throw a error when divided by zero.", () => {
      const resultFn = () => {
        divide(6, 0);
      };
      expect(resultFn).toThrowError("Division by zero");
    });
});