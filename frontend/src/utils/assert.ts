function assert(value: unknown, error: Error): asserts value {
  if (value) return;
  throw error;
}

export default assert;
