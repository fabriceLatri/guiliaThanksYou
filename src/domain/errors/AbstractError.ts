export abstract class AbstractError extends Error {
  constructor(
    public readonly message = '',
    protected readonly tag = AbstractError.name,
  ) {
    super(message);
  }

  public getMessage(): string {
    return this.buildMessage(this.message);
  }

  protected buildMessage(msg: string): string {
    return `[${this.tag}]: ${msg}`;
  }
}
