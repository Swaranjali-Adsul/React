import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';

@Controller('comment')
export class CommentController {


    constructor(private commentService:CommentService)
    {

    }


     
    //Add blog
    @Post(':user_id/:blog_id')
    addComment(@Param('user_id') user_id:number,
               @Param('blog_id') blog_id:number,
               @Body()  createBlogDto:CreateCommentDto
               )
    {
       return this.commentService.addComment(user_id,blog_id,createBlogDto)
    }

    @Get(':blog_id')
    getComment(@Param('blog_id') blog_id:number)
    {
        return this.commentService.getComment(blog_id)
    }


}
