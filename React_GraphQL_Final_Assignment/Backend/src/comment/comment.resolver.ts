import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CommentService } from "./comment.service";
import { Comment } from "./types/comment.type";



@Resolver((forType)=>Comment)
export class CommentResolver
{

    constructor(private service:CommentService)
    {

    }


@Mutation((returns)=>[Comment])
addComment(@Args('user_id') user_id:number,
           @Args('blog_id') blog_id:number,
           @Args('comments') comments:string,
           
           )
{
    return this.service.addComment(user_id,blog_id,comments)

}




@Query((returns)=>[Comment])
getComment(
    @Args('blog_id') blog_id:number,
       )

{
        return this.service.getComment(blog_id)
}

    


    

   

}
