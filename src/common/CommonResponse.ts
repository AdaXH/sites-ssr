import { BizErrorImpl } from '.';

export interface Response<T> {
  data: T;
  success: boolean;
  errorMessage?: string;
  errorCode?: string;
  errorStack?: BizErrorImpl<any>;
}

export class CommonResponse<T> implements Response<T> {
  public data: T;
  public success: boolean;
  public errorMessage?: string = null;
  public errorCode?: string = null;
  public errorStack?: BizErrorImpl<any> = null;

  public setData(data: T): void {
    this.data = data;
  }

  public setSuccess(success: boolean): void {
    this.success = success;
  }

  public setErrorMessage(errorMessage: string): void {
    this.errorMessage = errorMessage;
  }

  public setErrorCode(errorCode: string): void {
    this.errorCode = errorCode;
  }

  public setErrorStack<E>(errorStack: BizErrorImpl<E>): void {
    this.errorStack = errorStack;
  }

  static success<T>(data: T): CommonResponse<T> {
    const instance = new CommonResponse<T>();
    instance.setData(data);
    instance.setSuccess(true);
    return instance;
  }

  static error<E>(error: BizErrorImpl<E>): CommonResponse<any> {
    const instance = new CommonResponse();
    instance.setErrorMessage(error?.message);
    instance.setErrorCode(error?.errorCode);
    instance.setErrorStack(error?.errorStack);
    instance.setSuccess(false);
    return instance;
  }
}
