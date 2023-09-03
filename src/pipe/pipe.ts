import { OperationFun } from '../contracts/OperationFun';

/**
 * Pipe function that takes a value and a list of operations and applies them in order.
 * @param val Value to pipe.
 * @param ops Operations to apply.
 */
export function pipe<T>(val: T): T;
export function pipe<T, A>(val: T, op1: OperationFun<T, A>): A;
export function pipe<T, A, B>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
): B;
export function pipe<T, A, B, C>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
): C;
export function pipe<T, A, B, C, D>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
): D;
export function pipe<T, A, B, C, D, E>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
): E;
export function pipe<T, A, B, C, D, E, F>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
): F;
export function pipe<T, A, B, C, D, E, F, G>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
): G;
export function pipe<T, A, B, C, D, E, F, G, H>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
): H;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  val: T,
  op1: OperationFun<T, A>,
  op2: OperationFun<A, B>,
  op3: OperationFun<B, C>,
  op4: OperationFun<C, D>,
  op5: OperationFun<D, E>,
  op6: OperationFun<E, F>,
  op7: OperationFun<F, G>,
  op8: OperationFun<G, H>,
  op9: OperationFun<H, I>,
): I;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(
  val: T,
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
): J;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(
  val: T,
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
): any;

export function pipe<T>(val: T, ...ops: OperationFun<any, any>[]) {
  return ops.reduce((acc, op) => op(acc), val);
}
