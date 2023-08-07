import { AbstractError } from '@domain/errors';

export function NotImplementedError<T extends new(...args: any[]) => any>(ctr: T) {
  return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const className = ctr.name;
      const message = `[${className}]: this method "${methodName}" is not implemented!`;
      /* eslint-disable-next-line  no-throw-literal */
      throw new ctr(message) as T;
    };
    return descriptor;
  };
}
