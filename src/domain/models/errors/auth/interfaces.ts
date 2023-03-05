/**
 * Interface AuthError.
 *
 * @export
 * @interface AuthError
 */
export interface AuthError {
  /**
   * Code Status of Error when Authentification failed
   */
  statusCode: number;

  /**
   * Message of Error when Authentification failed
   */
  message: string;
}
