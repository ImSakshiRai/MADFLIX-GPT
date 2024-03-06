//validation logics in utils
//this will update if validation fails gives the error message

export const checkValidData = (email,password, Name)=>{ // email and password is not correct than send a error

    const isNameValid =/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(Name); //for name validation
    const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);  //if this regex is true it willl return true inside it aor false inside it
         
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password); //regex for checking error
    
   if (!isNameValid) return "Name is not Valid"; 
   if(!isEmailVaild) return "Email Id is not vaild";
   if(!isPasswordvalid) return "Password is not vaild" ;

   return null;

};