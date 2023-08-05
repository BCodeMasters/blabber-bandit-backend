import { Request, Response, NextFunction } from 'express';
import httpContext from 'express-http-context';

export async function setRequest(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  httpContext.set('request', {
    url: req?.url,
    method: req?.method,
  });

  return next();
}
