export class MathematicalError extends Error {
  private readonly mathMsg: string;

  constructor(message = '') {
    super(message);
    this.mathMsg = message !== '' ? `Mathematical Error: ${message}` : 'Mathematical Error!';
  }

  getMessage(): string {
    return this.mathMsg;
  }
}
