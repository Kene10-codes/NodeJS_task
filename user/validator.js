import { check } from 'express-validator'

const validateBody = {
  create: [
    check('firstName')
      .not()
      .isEmpty()
      .withMessage('First Name Cannot be blank'),
    check('lastName')
      .not()
      .isEmpty()
      .withMessage('Last Name Cannot be blank'),
    check('email')
      .trim()
      .not()
      .isEmpty()
      .withMessage('email must not be empty')
      .if(check('email').exists({ checkFalsy: true }))
      .isEmail()
      .withMessage('email must be a valid email')
      .if(check('email').exists({ checkFalsy: true }))
      .isLength({ max: 256 }),
    check('mobile')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Phone Number cannot be empty')
      .if(check('phoneNumber').exists({ checkFalsy: true }))
      .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\./0-9 ]*$/)
      .withMessage('Phone Number is not valid')
  ]
}

export default validateBody
