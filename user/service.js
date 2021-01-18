import { ObjectID, ObjectId } from 'mongodb'
import { handleResponse } from '../helpers/util'
import UsersModel from './model/users'

class UsersServices {
  static async createUsers(req, res) {
    
    const users = await UsersModel.create({ 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobile: req.body.mobile
    })
    //save users
    users.save()

    if (users) {
      return handleResponse(res, 200, 'Sign up was successfuly')
    } else {
      return handleResponse(res, 404, 'Sign up was not successful')
    }
    
  }

  static async getUsers(req, res) {
    
    const regUsers = await UsersModel.find({ 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobile: req.body.mobile
    })

    if (regUsers) {
      return handleResponse(res, 200, 'Users successfully found')
    } else {
      return handleResponse(res, 404, 'Users were not successful')
    }
  }

  static async getUserId(req, res) {
    const { id } = request.params

    const getUserId = await UsersModel.findById({ 
      _id: ObjectID(id)
    })

    if (getUserId) {
      return handleResponse(res, 200, 'Users successfully found')
    } else {
      return handleResponse(res, 404, 'Users were not successful')
    }
    
  }

  static async updatetUsers(req, res) {
    let data = {}

    const updated = await UsersModel.updateOne(
      {  _id: req.params.id },
      {
        $set: { approved: true }
      },
      { new: true }
    )

    if (!updated) {
      handleResponse(res, 500, 'Something went wrong')
    }

    data = {
      approved: true,
    }

    const response = data
    return handleResponse(res, 200, 'Users upated successfully', response)
  }

  static async getUserIdAndDelete(req, res) {
    const { id } = req.params

    const userId = await UsersModel.findOne({ _id: ObjectID(id) })

    if (!userId) return handleResponse(res, 404, 'assessment reports not found')

    return handleResponse(res, 200, 'success', userId)
  }
}

export default UsersServices
