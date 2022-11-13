import User, { IUser } from '@models/user-model';

/**
 * Get all users
 */
async function getAll(): Promise<IUser[]> {
  const allData = await User.find({})
  return allData;
}

export default {
  getAll
} as const;
