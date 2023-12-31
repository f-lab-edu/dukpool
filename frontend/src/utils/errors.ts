import makeError from 'make-error';

export const UnAuthorizedError = makeError('UnAuthorizedError');
export const ServerError = makeError('ServerError');
export const ExpiredTokenError = makeError('ExpiredTokenError');
