/* eslint-disable @typescript-eslint/no-namespace */
import type { warn } from 'console';

declare global {
  namespace NodeJS {
    interface Global {
      d: typeof warn;
    }
  }
  // namespace jest {
  //   interface Matchers<R> {
  //   }
  // }
}
