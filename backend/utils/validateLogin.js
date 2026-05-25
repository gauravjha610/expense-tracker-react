import Joi from "joi";

const loginSchema = Joi.object({

  email: Joi.string()
  .trim()
  .email()
  .required()
  .messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required"
  }),

  password: Joi.string()
  .required()
  .messages({
  "string.empty": "Password is required"
  }),
});

export const validateLogin =(data)=>{
  const {error} = loginSchema.validate(data);

  if(error){
    return(
      {
        success:false,
        message: error.details[0].message
      }
    );
  }

  return(
    {
      success:true,
    }
  );

}
