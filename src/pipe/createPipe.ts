import { OperationFun } from '../contracts/OperationFun';
import { pipe } from './pipe';

export function createPipe<T>(): OperationFun<T, T>;
export function createPipe<T, A>(op1: OperationFun<T, A>): OperationFun<T, A>;
export function createPipe<T, A, B>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
): OperationFun<T, B>;
export function createPipe<T, A, B, C>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
): OperationFun<T, C>;
export function createPipe<T, A, B, C, D>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
): OperationFun<T, D>;
export function createPipe<T, A, B, C, D, E>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
): OperationFun<T, E>;
export function createPipe<T, A, B, C, D, E, F>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
): OperationFun<T, F>;
export function createPipe<T, A, B, C, D, E, F, G>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
): OperationFun<T, G>;
export function createPipe<T, A, B, C, D, E, F, G, H>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
): OperationFun<T, H>;
export function createPipe<T, A, B, C, D, E, F, G, H, I>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
  op9: OperationFun<H, I>,
): OperationFun<T, I>;
export function createPipe<T, A, B, C, D, E, F, G, H, I, J>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
  op9: OperationFun<H, I>,
  op10: OperationFun<I, J>,
): OperationFun<T, J>;
export function createPipe<T, A, B, C, D, E, F, G, H, I, J>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
  op9: OperationFun<H, I>,
  op10: OperationFun<I, J>,
  ...ops: OperationFun<any, any>[]
): OperationFun<T, any>;

export function createPipe(...ops: OperationFun<any, any>[]) {
  return (val: any) => pipe(val, ...ops);
}
