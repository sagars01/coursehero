import { Router } from 'express';
import userRouter from './user-router';
// import courseRouter from './course-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
// baseRouter.use('/course', courseRouter)


// *** Export default **** //

export default baseRouter;
