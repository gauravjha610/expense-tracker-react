import Joi from "joi";

const signupSchema = Joi.object({
  name: Joi.string()
  .trim()
  .min(3)
  .required()
  .messages({
    "*":"Invalid name - must contain atleast 3 characters"
  }),

  email: Joi.string()
  .trim()
  .email()
  .required()
  .messages({
    "*":"Invalid email"
  }),

  password: Joi.string()
  .min(8)
  .pattern(/[a-z]/)
  .pattern(/[A-Z]/)
  .pattern(/[\W_]/)
  .required()
  .messages({
  "*":"Invalid password - must contain atleast 8 characters, 1 uppercase,1 lowercase,1 special character"
  }),
});

export const validateSignup =(data)=>{
  const {error} = signupSchema.validate(data);

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
