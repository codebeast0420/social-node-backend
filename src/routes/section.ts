import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/section'

router.get('/getSection', ctrl.getSection)
router.post('/addSection', ctrl.addSection)
router.post('/editSection', ctrl.editSection)
router.post('/deletSection', ctrl.deleteSection)

export default router