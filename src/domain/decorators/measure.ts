import {roundTo} from '@domain/helpers';

export const Measure =
  () => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // Save a reference to the original method
    const originalMethod = descriptor.value;

    // Rewrite original method in a wrapper
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();

      console.info(
        `${propertyKey} method executed in ${roundTo(
          end - start,
          2,
        )} milliseconds`,
      );

      return result;
    };

    return descriptor;
  };
