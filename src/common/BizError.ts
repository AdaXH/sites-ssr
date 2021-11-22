export interface BizErrorImpl<T> extends Partial<Error> {
  errorCode?: string;
  errorMessage?: string;
  errorStack?: T;
}

export class BizError<E> extends Error {
  errorCode: string;
  errorMessage: string;
  errorStack: E;
  constructor(message?: string, errorCode?: string, errorStack?: E) {
    super(message);
    this.errorCode = errorCode;
    this.errorStack = errorStack;
  }

  public setErrorMessage(errorMessage: string): void {
    this.errorMessage = errorMessage;
  }

  public setErrorCode(errorCode: string): void {
    this.errorCode = errorCode;
  }

  public setErrorStack(errorStack: E): void {
    this.errorStack = errorStack;
  }
}
