import { MathematicalError } from '@domain/errors';

export const roundTo = (num1: number, precision: number): number | never => {
  if (precision < 0) {
    throw new MathematicalError("Parameter ‘precision' must be positive number");
  }

  return Number(num1.toFixed(precision));
};
