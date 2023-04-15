type HandlerFunction = (error: Error, ctx: any) => void;

export const Catch = (errorType: any, handler: HandlerFunction): any => {
  return (
    target: any,
    propertyKey: string,
    descriptor?: TypedPropertyDescriptor<(...arg: any[]) => any>,
  ) => {
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          try {
            const result = descriptor?.value?.apply(this, args);

            if (result && result instanceof Promise) {
              // Return promise
              return result.catch((error: any) => {
                _handleError(this, errorType, handler, error);
              });
            }

            // Return actual result
            return result;
          } catch (error) {
            _handleError(this, errorType, handler, error as Error);
          }
        };

        Object.defineProperty(this, propertyKey, {
          value: wrapperFn,
          configurable: true,
          writable: true,
        });
        return wrapperFn;
      },
    };
  };
};

export const CatchAll = (handler: HandlerFunction): any =>
  Catch(Error, handler);

const _handleError = (
  ctx: any,
  errorType: any,
  handler: HandlerFunction,
  error: Error,
) => {
  // Check if error is instance of given error type
  if (typeof handler === 'function' && error instanceof errorType) {
    // Run handler with error object and class context
    handler.call(null, error, ctx);
  } else {
    // Throw error further
    // Next decorator in chain can catch it
    throw error;
  }
};
