import { OperationFun } from '../contracts/OperationFun';
import { pipe } from './pipe';

export function createPipe<T>(): (val: T) => T;
export function createPipe<T, A>(op1: OperationFun<T, A>): (val: T) => A;
export function createPipe<T, A, B>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
): (val: T) => B;
export function createPipe<T, A, B, C>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
): (val: T) => C;
export function createPipe<T, A, B, C, D>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
): (val: T) => D;
export function createPipe<T, A, B, C, D, E>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
): (val: T) => E;
export function createPipe<T, A, B, C, D, E, F>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
): (val: T) => F;
export function createPipe<T, A, B, C, D, E, F, G>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
): (val: T) => G;
export function createPipe<T, A, B, C, D, E, F, G, H>(
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
): (val: T) => H;
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
): (val: T) => I;
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
): (val: T) => J;
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
): (val: T) => any;

export function createPipe(...ops: OperationFun<any, any>[]) {
  return (val: any) => pipe(val, ...ops);
}
