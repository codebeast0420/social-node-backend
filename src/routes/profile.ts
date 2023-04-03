import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/profile'

router.get('/getProfile', ctrl.getProfile)
router.get('/getProfileByUser', ctrl.getProfileByUserId);
router.post('/addProfile', ctrl.addProfile)
router.post('/editProfile', ctrl.editProfile)
router.post('/deletProfile', ctrl.deleteProfile)

export default router