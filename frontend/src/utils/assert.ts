import { InvalidUrlError } from '@utils/errors';

function assert(value: unknown): asserts value {
  if (value) return;
  throw new InvalidUrlError('InvalidUrl');
}

export default assert;
