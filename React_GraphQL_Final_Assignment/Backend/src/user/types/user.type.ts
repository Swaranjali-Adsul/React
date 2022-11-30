import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Blog } from "src/blog/types/blog.type";
import { Comment } from "src/comment/types/comment.type";

@ObjectType('User')
export class User
{
    @Field((type)=>ID)
    user_id:number

    @Field({nullable:true})
    firstname:string

    @Field({nullable:true})
    lastname:string

    @Field((type)=>ID,{nullable:true})
    email:string

    @Field({nullable:true})
    password:string

    @Field({nullable:true})
    city:string

    @Field({nullable:true})
    state:string

    @Field({nullable:true})
    country:string

    @Field({nullable:true})
    pcode:number

    @Field({nullable:true})
    dob:Date

    @Field({nullable:true})
    gender:string

    @Field(type=>[Blog])
    blogs:Blog[]


    @Field(type=>[Comment])
    comments:Comment[]

    
    
}