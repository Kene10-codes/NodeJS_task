import express from 'express'
import validateBody from './validator'
import UsersServices from './service'


const router = express.Router()

router.post(
  '/user',
  validateBody.create,
  UsersServices.createUsers
)

router.get(
  '/user',
  UsersServices.getUsers
)

router.get(
    '/:id',
    UsersServices.getUserId
  )

  router.patch(
    '/:id',
    UsersServices.updatetUsers
  )

  router.delete(
    '/api/user/:id',
    UsersServices.getUserIdAndDelete
  )



export default router
