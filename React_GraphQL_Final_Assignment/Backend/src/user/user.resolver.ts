import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./types/user.type";
import { UserService } from "./user.service";


@Resolver((forType)=>User)
export class UserResolver
{

    constructor(private service:UserService)
    {

    }

    @Mutation((returns)=>User)
    signup(
        @Args('firstname') firstname:string,
        @Args('lastname') lastname:string,
        @Args('email')  email:string,
        @Args('password') password:string,
       
    )
    {
        return this.service.signup(firstname,lastname,email,password)
    }

    @Query((returns)=>User)
    signin(
        @Args('email') email:string,
        @Args('password') password:string
    )
    {
      return this.service.signin(email,password)
    }


    @Mutation((retuens)=>User)
    updateProfile(
        @Args('user_id') user_id:number,
        @Args('firstame') firstname:string,
        @Args('lastname') lastname:string,
        @Args('email') email:string,
        @Args('password') password:string,
        @Args('city') city:string,
        @Args('state') state:string,
        @Args('country') country:string,
        @Args('pcode') pcode:string,
        @Args('dob') dob:Date,
        @Args('gender') gender:string,
    )
    {
        return this.service.updateProfile(user_id,firstname,lastname,email,password,city,state,country,pcode,dob,gender)
    }

    @Query((returns)=>User)
    getProfile(
        @Args('user_id') user_id:number
    )
    {
      return this.service.getProfile(user_id)
    }

}
