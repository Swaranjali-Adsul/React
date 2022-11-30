import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateSigninDto } from './dto/signin.dto';
import { CreateSignupDto } from './dto/signup.dto';
import { UserEntity } from './user.entity';
import * as Crypto from 'crypto-js';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { CreateProfileDto } from './dto/profile.dto';
import { userInfo } from 'os';


@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>)
    {

    }

    async signup(firstname:string,lastname:string,email:string,password:string)
    {
        const user=this.userRepository.create()

        user.firstname=firstname
        user.lastname=lastname
        user.email=email
        user.password=String(Crypto.MD5(password))
        // user.confirmpassword=String(Crypto.MD5(createSignupDto.confirmpassword))
       


        await user.save()

        return user

    }


     async signin(email,password)
    {
        const condition={
            email:email,
            password:String(Crypto.MD5(password))
        }

        const user= await this.userRepository.createQueryBuilder('user').where('user.email=:email and user.password=:password',condition).getOne()

        if(!user)
        {
            throw new UnauthorizedException();
        }

         delete user.password
        return user
     }
      

     

     async getUserDetails(email,password)
     {
        const condition={
            email:email,
            password:String(Crypto.MD5(password))
        }

        const user= await this.userRepository.createQueryBuilder('user').where('user.email=:email and user.password=:password',condition).getOne()
        if(!user)
        {
            throw new UnauthorizedException();
        }

        //  delete user.password
        return user
     }

     async updateProfile(user_id:number,firstname:string,lastname:string,email:string,password:string,city:string,state:string,country:string,pcode:string,dob:Date,gender:string)
     {


       const user=await this.userRepository.findOne({where:{user_id}})
  
     if(!user )
     {
      throw new NotFoundException("User not found")
     }
const updateUser=await this.userRepository.createQueryBuilder().update(user).set({
     firstname:firstname,
    lastname:lastname,
    email:email,
    password:String(Crypto.MD5(password)),
    city:city,
    state:state,
    country:country,
    pcode:pcode,
    dob:dob,
    gender:gender}).where('user_id=:user_id',{user_id}).execute()
    
     

     return this.getProfile(user_id)
     }



     async getProfile(user_id:number)
     {
        const condition={
            user_id:user_id
           
        }

        const user= await this.userRepository.createQueryBuilder('user').where('user.user_id=:user_id ',condition).getOne()
        if(!user)
        {
            throw new NotFoundException();
        }

        //  delete user.password
        return user
     }

     
}
