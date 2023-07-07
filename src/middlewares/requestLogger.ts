import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { logger } from '../logger';




// Create the request logger middleware function
export function requestLogger(req: Request, res: Response, next: NextFunction) {
  morgan(':method :url', {
    stream: {
      write: (message: string) => {
        logger.info(message);
      },
    },
  })(req, res, next);
}