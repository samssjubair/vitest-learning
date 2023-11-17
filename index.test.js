import { it, expect, describe, vi } from "vitest";
import { divide, executeCallback, fetchData, fetchWithError } from "./index.js";

describe("divide()", () => {
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
    const loggerFn = vi.fn();
    executeCallback(loggerFn);
    expect(loggerFn).toHaveBeenCalled();
  });

  it("should executed with the provided taskText argument.", () => {
    const loggerFn = vi.fn();
    executeCallback(loggerFn, "Kire mama");
    expect(loggerFn).toHaveBeenCalledWith("Kire mama");
  });
});

describe("fetchData()", () => {
  it("should resolves with the correct data when the asynchronous operation is successful.", async () => {
    const assumedData = { name: "John", age: 30 };
    const fetchedData = await fetchData();
    expect(fetchedData).toStrictEqual(assumedData);
  });

  it("should correctly rejects the Promise with an error message.", async () => {
    try {
        await fetchWithError();
        expect.fail("Expected an error but got success");
    } catch (error) {
        expect(error.message).toBe("Error");
    }
  });
});
