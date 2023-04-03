import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/service'

router.get('/getService', ctrl.getService)
router.post('/addService', ctrl.addService)
router.post('/editService', ctrl.editService)
router.post('/deletService', ctrl.deleteService)

export default router