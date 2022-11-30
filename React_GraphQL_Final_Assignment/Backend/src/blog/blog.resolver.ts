import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BlogService } from "./blog.service";
import { Blog } from "./types/blog.type";



@Resolver((forType)=>Blog)
export class BlogResolver
{

    constructor(private service:BlogService)
    {

    }


//add blog
@Mutation((returns)=>Blog)
createBlog(
    @Args('user_id') user_id:number,
    @Args('title') title:string,
    @Args('contents') contents:string,
    @Args('tags') tags:string,
         )

{
return this.service.createBlog(user_id,title,contents,tags)
}

//get blog by id
@Query((returns)=>Blog)
getBlogDetails(
        @Args('blog_id') blog_id:number
)
{
    return this.service.getBlogDetails(blog_id)
}

//get all blogs
@Query((returns)=>[Blog])
getBlogs()
{
    return this.service.getBlogs()
}

//update blog
@Mutation((returns)=>Blog)
updateBlog(
        @Args('user_id') user_id:number,
        @Args('blog_id') blog_id:number,
        @Args('title') title:string,
        @Args ('contents') contents:string,
        @Args('tags') tags:string
)
{
  return this.service.updateBlog(user_id,blog_id,title,contents,tags)
}


//delete blog
@Mutation((returns)=>[Blog])
deleteBlog(
    @Args('user_id') user_id:number,
    @Args('blog_id') blog_id:number
)
{
return this.service.deleteBlog(user_id,blog_id)
} 

//search blog
@Query((returns)=>[Blog])
search(
    @Args('tags') tags:string
)
{
    return this.service.search(tags)
}

//like blog
@Mutation((returns)=>[Blog])
likes(
    @Args('blog_id') blog_id:number
)
{
    return this.service.likes(blog_id)
}

//dislike blog

@Mutation((returns)=>[Blog])
dislikes(
    @Args('blog_id') blog_id:number
)
{
    return this.service.dislikes(blog_id)
}


    

   

}
