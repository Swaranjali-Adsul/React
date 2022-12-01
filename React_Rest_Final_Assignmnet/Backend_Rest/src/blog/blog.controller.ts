import { Controller, Delete, Get ,Param,Patch,Post,Body, Put} from '@nestjs/common';

import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create.blog.dto';
import { SearchBlogDto } from './dto/search.blog.dto';

@Controller('blog')
export class BlogController {

    constructor(private blogService:BlogService)
    {

    }

    
    //Add blog
    @Post(':user_id')
    createBlog(@Param('user_id') user_id:number, @Body()  createBlogDto:CreateBlogDto)
    {
       return this.blogService.createBlog(user_id,createBlogDto)
    }

    //get blog by id
    @Get(':id')
    getBlogDetails(@Param('id') id:number)
    {
        return this.blogService.getBlogDetails(id)
      
    }

    //get all blogs
    @Get()
    getBlogs()
    {
         return this.blogService.getBlogs()
    }

    //update blog status
    @Put(':user_id/:blog_id')
    updateBlog(
        @Param('user_id') user_id:number,
        @Param('blog_id') blog_id:number,
        @Body() createBlogDto:CreateBlogDto,
       
       
       
        )
    {
        return this.blogService.updateBlog(user_id,blog_id,createBlogDto)

    }

    //delete a blog
    @Delete(':user_id/:blog_id')
    deleteBlog(
        @Param('user_id') user_id:number,
       @Param('blog_id') blog_id:number,
    )
    {

        return this.blogService.deleteBlog(user_id,blog_id)
    }
  
//search blog
    @Post('search/:tags')
     search(@Param('tags') tags:string)
     {
       return this.blogService.search(tags)
     }

     @Patch('likes/:id')
     likes(@Param('id') id:number)
     {
        return this.blogService.likes(id)
     }
   
     @Patch('dislikes/:blog_id')
     dislikes(@Param('blog_id') blog_id:number)
     {
        return this.blogService.dislikes(blog_id)
     }

}
