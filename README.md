# Functional Programming Functions

This project is a collection of functional programming functions written in TypeScript. The functions are designed to be composable and reusable, allowing you to build complex data transformations and processing pipelines.

## Installation

To use these functions in your project, you can install them via npm:

```
npm install funcode
```

## Usage

To use a function, you can import it from the package:

```typescript
import { pipe } from 'funcode';

const add = (b: number) => (a: number) => a + b;
const square = (n: number) => n * n;

const result = pipe(2, add(3), square); // 25
```

## Functions

### `createPipe`

Creates a new function that applies a series of operations to a value in sequence.

```typescript
import { createPipe } from 'funcode';

const add = (b: number) => (a: number) => a + b;
const square = (n: number) => n * n;

const myPipe = createPipe(add(3), square);
const result = myPipe(2); // 25
```

### `pipe`

Applies a series of operations to a value in sequence.

```typescript
import { pipe } from 'funcode';

const add = (b: number) => (a: number) => a + b;
const square = (n: number) => n * n;

const result = pipe(2, add(3), square); // 25
```

### `tap`

Executes a side effect and returns the original value, ideal for debugging.

```typescript
import { tap } from 'funcode';
import { add, square } from './';

const log = (value: any) => console.log(value);

const result = pipe(2, tap(log), add(3), square); // 25
```

### `when`

A collection of functions that receive a function and execute it if the value matches the condition.

```typescript
import { eq, gt, gte, lt, lte } from 'funcode/when';

const result = pipe(2, eq(2, (val) => val * 2), gte(4, (val) => val * 2)); // 8
```
