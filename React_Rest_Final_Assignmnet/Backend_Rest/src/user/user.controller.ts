import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateSigninDto } from './dto/signin.dto';
import { CreateSignupDto } from './dto/signup.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {

    

    constructor(private userService:UserService)
    {

    }

    @Post('signup')
    signup(@Body() createSingupDto:CreateSignupDto)
    {
      return this.userService.signup(createSingupDto)
    }


    @Post('signin')
     signin(@Body() createSigninDto:CreateSigninDto)
     {
       return this.userService.signin(createSigninDto)
     }

     @Get(':email/:password')
     getUserDetails(@Param('email') email:string,
    @Param('password') password:string
    )
    {
        return this.userService.getUserDetails(email,password)
      
    }

    @Put(':user_id')
    updateProfile(@Param('user_id') user_id:number,
    @Body() createSigupDto:CreateSignupDto)
    {
      return this.userService.updateProfile(user_id,createSigupDto)
    }

    @Get(':user_id')
    getProfile(@Param('user_id') user_id:number)
    {
      return this.userService.getProfile(user_id)
    }

   
    
}
