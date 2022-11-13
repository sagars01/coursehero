import { Router } from 'express';
import userRouter from './v1/user-router';
import courseRouter from './v1/course-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/v1/users', userRouter);
baseRouter.use('/v1/courses', courseRouter);


// *** Export default **** //

export default baseRouter;
