type HandlerFunction = (error: Error, ctx: any) => void;

export const Catch =
  (errorType: any, handler: HandlerFunction): any =>
  (originalMethod: any, context: ClassMethodDecoratorContext) => {
    // Rewrite original method with try/catch wrapper
    function wrapperFn(this: any, ...args: any[]) {
      try {
        const result = originalMethod.apply(this, args);

        // Check if method is asynchronous
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
    }

    return wrapperFn;
  };

export const CatchAll = (handler: HandlerFunction): any =>
  Catch(Error, handler);

function _handleError(
  ctx: any,
  errorType: any,
  handler: HandlerFunction,
  error: Error,
) {
  // Check if error is instance of given error type
  if (typeof handler === 'function' && error instanceof errorType) {
    // Run handler with error object and class context
    handler.call(null, error, ctx);
  }
  // Throw error further
  // Next decorator in chain can catch it
  throw error;
}
