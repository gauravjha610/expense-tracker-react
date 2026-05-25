import Joi from "joi";

const transactionSchema = Joi.object({
  type: Joi.string()
  .valid("Income", "Expense")
  .required()
  .messages({
  "any.only":"Type must be Income or Expense",
  "any.required":"Type is required"
  }),

  description: Joi.string()
  .trim()
  .required()
  .messages({
  "string.empty":"Description is required"
  }),

  amount: Joi.number()
  .required()
  .greater(0)
  .messages({
    "number.base":"Amount must be a number",
    "number.greater":"Amount must be greater than 0",
    "any.required":"Amount is required"
  }),
});

export const validateTransaction = (data)=>{
  const {error} = transactionSchema.validate(data);

  if(error){
    console.log("validateTransaction33");
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