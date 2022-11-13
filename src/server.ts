import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import helmet from 'helmet';
import logger from 'jet-logger';

import express, { Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';
import 'express-async-errors';

import apiRouter from '@routes/api';
import envVars from '@shared/env-vars';
import { CustomError } from '@shared/errors';


// **** Variables **** //

const app = express();


// **** Set basic express settings ****# //

// Common middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (envVars.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// Security (helmet recommended in express docs)
if (envVars.nodeEnv === 'production') {
  app.use(helmet());
}

// *** Mongoose and Mongo Connect *** //

const mongoDB = process.env.DB_M_URL || "";
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("connected" , () => {console.log("MongoDB Successfully Connected to: " + mongoDB)})
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// **** Add API Routes ****# //

// Add api router
app.use('/api/v1', apiRouter);

// Error handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error | CustomError, req: Request, res: Response, _: NextFunction) => {
  logger.err(err, true);
  const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
  return res.status(status).json({
    error: err.message,
  });
});


// **** Export default **** //

export default app;
