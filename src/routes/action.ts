import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/action'

router.get('/getAction', ctrl.getAction)
router.get('/getActionClientId', ctrl.getActionClientId);
router.get('/getActionProfessionalId', ctrl.getActionProfessionalId);
router.get('/getActionBothId', ctrl.getActionBothId);
router.post('/addAction', ctrl.addAction)
router.post('/editAction', ctrl.editAction)
router.post('/deleteAction', ctrl.deleteAction)

export default router