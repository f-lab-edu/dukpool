function assert(condition: unknown, errorMessage?: string): asserts condition {
  if (!condition) {
    console.log(condition);
    throw new Error(errorMessage || 'condition is not true');
  }
}

export default assert;
