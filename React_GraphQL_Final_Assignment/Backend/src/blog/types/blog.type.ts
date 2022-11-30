import { Field, ID, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/types/user.type";
import { Comment } from "src/comment/types/comment.type";

@ObjectType('Blog')
export class Blog
{
    @Field((type)=>ID)
    blog_id:number

    @Field()
    user_id:number

    @Field()
    title:string

    @Field()
    contents:string

    @Field()
    tags:string

    @Field()
    date:Date

    @Field({nullable:true,defaultValue:0})
    like:number

    @Field({nullable:true,defaultValue:0})
    dislike:number

    @Field({nullable:true})
    ratings:number

    @Field(type=>User)
     user:User

     @Field(type=>[Comment],{nullable:true})
     comments:Comment[]
}