import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Blog } from "src/blog/types/blog.type";
import { User } from "src/user/types/user.type";


@ObjectType('Comment')
export class Comment
{
    @Field((type)=>ID)
    comment_id:number

    @Field()
    user_id:number

    @Field()
    blog_id:number

    @Field()
    comments:string

    @Field()
    date:Date

    

    

     @Field(type=>User)
     users:User


     @Field(type=>Blog)
     blogs:Blog
}