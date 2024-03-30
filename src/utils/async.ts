export interface IReturnError<T = any> {
  error: Error;
  value: T;
}

export async function ReturnError<T = any>(
  prom: Promise<T>
): Promise<IReturnError<T>> {
  try {
    let value: T = await prom;
    return Promise.resolve({ value } as IReturnError<T>);
  } catch (error) {
    return Promise.resolve({ error } as IReturnError<T>);
  }
}
