export const checkValidateData=(email,password)=>{
    // const isNameValid=/^[a-zA-Zà-ÿÀ-Ÿ]+(?:[ '-][a-zA-Zà-ÿÀ-Ÿ]+)*$/.test(name);
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // if(!isNameValid) return "name not valid"
    if(!isEmailValid) return "email not valid"
    if(!isPasswordValid) return "password should contain atleast 8 and Caps and number"

    return null;

}