import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';

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
 * Add a new user
 */
router.post(p.add, async (req: Request, res: Response) => {

})

/**
 * Get all users
 */
router.get(p.get, async (_: Request, res: Response) => {
  const users = await userService.getAll();
  return res.status(OK).json({ users });
});


export default router;
