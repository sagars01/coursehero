import Course, { ICourse } from '@models/course-model';

/**
 * Get all users
 */
async function getAll(): Promise<ICourse[]> {
  const allData = await Course.find({})
  return allData;
}

export default {
  getAll
} as const;
