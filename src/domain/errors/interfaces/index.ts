export interface IHttpError extends Error {
  errorCode: number;
  errorMessage: string;
}
