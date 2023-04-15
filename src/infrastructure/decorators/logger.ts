// export function Logger(deprecationReason: string) {
//   return (
//     target: any,
//     propertyKey: string,
//     descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
//   ) => {
//     let originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       // whatever code suits you here...
//       // dont use "this", use "target"
//       //before
//       console.log(
//         `${propertyKey} method called with args: ${JSON.stringify(args)}`,
//       );

//       let result = originalMethod?.apply(target, args);

//       //after
//       console.log(
//         `${propertyKey} method return value: ${JSON.stringify(result)}`,
//       );

//       return result;
//     };

//     Object.defineProperty(target, propertyKey, {
//       value: descriptor.value,
//       configurable: true,
//       writable: true,
//     });

//     return descriptor.value as any;
//     // return {
//     //   get() {
//     //     const wrapperFn = (...args: any[]) => {
//     //       console.warn(
//     //         `Method ${propertyKey} is deprecated with reason: ${deprecationReason}}`,
//     //       );
//     //       console.log(descriptor);
//     //       descriptor?.value?.apply(target, args);
//     //     };

//     //     Object.defineProperty(this, propertyKey, {
//     //       value: wrapperFn,
//     //       configurable: false,
//     //       writable: true,
//     //     });
//     //     return wrapperFn;
//     //   },
//     // };

//     // console.log('Hello:', descriptor);
//     // const targetMethod = descriptor.value;

//     // descriptor.value = function (...args: any[]) {
//     //   console.log('Hello');
//     //   return targetMethod.apply(this, args);
//     // };
//   };
// }

export function Logger() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log('params: ', ...args);
      const result = original.call(this, ...args);
      console.log('result: ', result);
      return result;
    };
  };
}
