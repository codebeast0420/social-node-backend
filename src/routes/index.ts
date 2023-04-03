import { Router, Request, Response } from 'express';

const router = Router()

import userRoutes from './user'
import profileRoutes from './profile'
import serviceRoutes from './service';
import actionRoutes from './action';

// Backend Test
router.get('/test', (req: Request, res: Response) =>
  res.send('OK')
)

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/service', serviceRoutes);
router.use('/action', actionRoutes);

export default router;