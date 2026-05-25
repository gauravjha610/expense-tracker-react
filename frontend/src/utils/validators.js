
export const validateAmount=(amount)=>{
    if(!amount) return "Amount is required";
    if(isNaN(amount)) return "Amount must be a number";
    if(amount<=0) return "Amount must be greater than 0";
}
export const validateDescription=(description)=>{
    if(!description.trim()) return "Description is required";
}

export const validateEmail =(email)=>{
    if(!email.trim()) return "Email is required";
    if(!/\S+@\S+\.\S+/.test(email)) return "Invalid Email";
}

export const validatePassword=(password)=>{
    if(!password) return "Password is required";
    if(password.length<8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) 
        return "password should be of minimum 8 characters and must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character";
}
export const validateLoginPassword=(password)=>{
    if(!password) return "Password is required";
}
export const validateName=(name)=>{
    if(!name) return "Name is required"
    if(name.length<3) return "Name must be atleast 3 characters" 
}