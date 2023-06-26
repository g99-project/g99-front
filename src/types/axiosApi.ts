/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface CommonRequestHeader {
  'Content-Type'?: string;
  Accept?: string;
  Authorization?: string;
}

export interface CommonRequestConfig extends AxiosRequestConfig {
  headers?: any;
  doNotShowSpinner?: boolean;
}

export default class AxiosApi {
  protected commonRequestConfig: AxiosRequestConfig = {
    baseURL: 'http://www.ecog99.com/api/v1',
    timeout: 5000,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Cache-Control': 'no-cache',
    },
    withCredentials: true,
  };
  private static thisInstance: AxiosApi;
  private instance: AxiosInstance;
  private showSpinner = () => {};
  private hideSpinner = () => {};
  private requestHandler!: (
    requestConfig: CommonRequestConfig,
  ) => CommonRequestConfig;
  private responseHandler!: (
    response: AxiosResponse<any>,
  ) => AxiosResponse<any>;
  public setShowSpinner(handler: () => {}): void {
    if (typeof handler !== 'function') {
      throw new Error('handler is not a function');
    }
    this.showSpinner = handler;
  }
  public setHideSpinner(handler: () => {}): void {
    if (typeof handler !== 'function') {
      throw new Error('handler is not a function');
    }
    this.hideSpinner = handler;
  }
  public static getInstance() {
    if (!this.thisInstance) {
      this.thisInstance = new AxiosApi();
    }

    return this.thisInstance;
  }
  constructor() {
    this.instance = axios.create(this.commonRequestConfig);

    this.instance.interceptors.request.use(
      this.requestInterceptor.bind(this),
      err => Promise.reject(err),
    );

    this.instance.interceptors.response.use(
      this.responseInterceptor.bind(this),
      this.postErrorHandler.bind(this),
    );
  }
  /**
   * 응답/에러 인터셉터에서 공통으로 사용하는 post handler
   * decrease spinner 처리를 한다.
   */
  private postIncomingHandler(config: CommonRequestConfig): void {
    try {
      if (!config.doNotShowSpinner) {
        this?.hideSpinner?.();
      }
    } catch (error) {
      // Do Nothing
    }
  }
  /**
   * chaining을 위한 선 수행 에러 핸들러
   * @param error Axios response시 에러
   * @returns 에러 객체 수정없이 그대로 리턴
   */
  private postErrorHandler(error: AxiosError): Promise<any> {
    const config = error?.config;
    if (config) {
      this.postIncomingHandler(config);
    }

    throw error;
  }
  /**
   * 요청시 인터셉터 구현
   * @param requestConfig Axios call시 Config
   * @returns 조정된 config
   */
  private async requestInterceptor(
    requestConfig: CommonRequestConfig,
  ): Promise<CommonRequestConfig> {
    requestConfig = this?.requestHandler?.(requestConfig) || requestConfig;
    if (!requestConfig.doNotShowSpinner) {
      this?.showSpinner?.();
    }

    return requestConfig;
  }
  /**
   * 응답시 인터셉터 구현부
   * @param requestConfig Axios response 시 응답값
   * @returns 조정된 응답값
   */
  private async responseInterceptor(
    response: AxiosResponse<any>,
  ): Promise<AxiosResponse<any>> {
    const config = response.config as CommonRequestConfig;
    this.postIncomingHandler(config);
    try {
      response = this?.responseHandler?.(response) || response;
    } catch (e) {
      throw new Error('error');
    }

    return response;
  }
  /**
   * axios instance를 노출시키지 않고, 이 메서드를 통해 request를 찌른다.
   * @param config CommonRequestConfig
   * @returns API 응답 Promise
   */
  public request<T = any>(
    config: CommonRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.request<T>(config);
  }
}
