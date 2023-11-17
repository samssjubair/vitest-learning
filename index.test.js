import {it, expect, describe, vi} from 'vitest';
import { divide, executeCallback } from './index.js';


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

describe("callback()", () => {
  it("should correctly calls the provided callback function", () => {
    const loggerFn= vi.fn();
    executeCallback(loggerFn);
    expect(loggerFn).toHaveBeenCalled();
  });

  it("should executed with the provided taskText argument.", () => {
    const loggerFn = vi.fn();
    executeCallback(loggerFn, "Kire mama");
    expect(loggerFn).toHaveBeenCalledWith("Kire mama");
  });

  
});