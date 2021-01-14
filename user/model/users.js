import { Schema, model } from 'mongoose'

const assessmentReportSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  }
})


const UsersModel = model('users', usersSchema)

export default UsersModel
