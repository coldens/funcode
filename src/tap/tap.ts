/**
 * Executes the side effect function and returns the current value.
 * Take care to not mutate the current value in the side effect function.
 */
export function tap<T>(sideEffect: (value: T) => void) {
  return (current: T) => {
    sideEffect(current);
    return current;
  };
}
