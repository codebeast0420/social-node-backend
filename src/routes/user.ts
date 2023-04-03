import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/user'

router.post('/getUsers', ctrl.getUsers)
router.post('/signIn', ctrl.signIn)
router.post('/checkJwt', ctrl.checkJwt)
router.post('/sendMail', ctrl.sendMail)
router.post('/mailVerify', ctrl.mailVerify)
router.get('/getUser', ctrl.addUser)
router.post('/addUser', ctrl.addUser)
router.put('/editUser', ctrl.editUser)
router.delete('/deleteUser', ctrl.deleteUser)

export default router