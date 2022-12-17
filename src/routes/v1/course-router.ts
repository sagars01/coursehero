import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import courseService from '@services/course-service';

// **** Variables **** //

// Misc
const router = Router();
const { OK } = StatusCodes;

// Paths
export const p = {
  get: '/all',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
} as const;


// **** Routes **** //

/**
 * Get all users
 */
router.get(p.get, async (_: Request, res: Response) => {
  const courses = await courseService.getAll();
  console.log(courses)
  return res.status(OK).json({ courses: courses });
});


export default router;
