// export function Logger() {
//   return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
//     console.log(descriptor?.value);
//     // return {
//     //   get() {
//     //     const wrapperFn = (...args: any[]) => {
//     //       console.warn(`Method ${propertyKey} is testing for logger}`);
//     //       console.log(descriptor);
//     //       descriptor?.value?.apply(target, args);
//     //     };

//     //     Object.defineProperty(this, propertyKey, {
//     //       value: wrapperFn,
//     //       configurable: false,
//     //       writable: true,
//     //     });
//     //     return wrapperFn as any;
//     //   },
//     // };
//   };
// }

export function Logger() {
  return function <T>(
    target: T,
    propertyKey: keyof T,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(
        `${
          propertyKey as string
        } method using with with ${args.toString()} arguments`,
      );

      const result = originalMethod.apply(this, args);

      console.log(
        `${propertyKey as string} method result: ${result.toString()}`,
      );
    };

    return descriptor;
  };
}
