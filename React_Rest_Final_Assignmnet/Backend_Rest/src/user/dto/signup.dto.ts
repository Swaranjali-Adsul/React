export interface CreateSignupDto
{
    
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    // confirmpassword:string
    city:string;
    state:string;
    country:string;
    pcode:string;
    dob:Date;
    gender:string
}