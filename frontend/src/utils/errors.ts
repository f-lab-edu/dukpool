import makeError from 'make-error';

export const UnAuthorizedError = makeError('UnAuthorizedError');
export const ServerError = makeError('ServerError');
export const ExpiredRefreshTokenError = makeError('ExpiredRefreshTokenError');
export const ExpiredAccessTokenError = makeError('ExpiredAccessTokenError');
