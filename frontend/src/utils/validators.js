
export const validateTransaction=(data)=>{

    const errors ={}
    if (!data.description?.trim()) {
        errors.description = "Description is required";
    }
    if (!data.amount) {
        errors.amount = "Amount is required";
    }
    else if (isNaN(data.amount)) {
        errors.amount = "Amount must be number";
    }
    else if (Number(data.amount) <= 0) {
        errors.amount = "Amount must be greater than 0";
    }

    return errors;


}

export const validateEmail =(email)=>{
    if(!email.trim()) return "Email is required";
    if(!/\S+@\S+\.\S+/.test(email)) return "Invalid Email";
}

export const validatePassword=(password)=>{
    if(!password) return "Password is required";
    if(password.length<8) return "Password must be atleast 8 characters";
    if(!/[A-Z]/.test(password)) return "must contain atleast 1 uppercase letter";
    if(!/[a-z]/.test(password)) return "must contain atleast 1 lowercase letter";
    if(!/[0-9]/.test(password)) return "must contain atleast 1 number";
    if(!/[^A-Za-z0-9]/.test(password)) return "must contain atleast 1 special character";
}
export const validateName=(name)=>{
    if(!name) return "Name is required"
    if(name.length<3) return "Name must be atleast 3 characters" 
}