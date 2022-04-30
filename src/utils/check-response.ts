

export interface CustomResponse<T> extends Body {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer?: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
  json(): Promise<T>;
}

export function checkResponse(res: CustomResponse<any>): Promise<any> {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}
