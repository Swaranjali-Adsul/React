import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';

@Injectable()
export class CommentService {


    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository:Repository<BlogEntity>,
         @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>,
        @InjectRepository(CommentEntity)
        private commentRepository:Repository<CommentEntity>)
        
      {
  
      }

      async getComment(blog_id:number)
      {
         // const comment=await this.commentRepository.findOne({relations:['blogs','users'],where:{blog_id}})
         const condition={
            blog_id:blog_id,
           
        }
         const comment= await this.commentRepository.createQueryBuilder('comment').where('comment.blog_id=:blog_id ',condition).execute()


         if(!comment)
         {
               throw new NotFoundException()
         }
   
         return await  this.commentRepository.find({where :{blog_id},relations:['blogs','users']})
         
      }

      async addComment (user_id:number ,blog_id:number,createCommentDto:CreateCommentDto)
      {
         const user=await this.userRepository.findOneBy({user_id})
         const blog=await this.blogRepository.findOneBy({blog_id})

         if(!user || !blog)
         {
            throw new NotFoundException()
         }

         const comment=this.commentRepository.create()
   
          comment.user_id=user_id
          comment.blog_id=blog_id
          comment.comments=createCommentDto.comments
          comment.date=new Date()
   
        //   blog.user=user
        comment.users=user
        comment.blogs=blog
         // blog.like=createBlogDto.like
         // blog.dislike=createBlogDto.dislike
         // blog.ratings=createBlogDto.ratings
   
       
         await comment.save()
       
         return this.getComment(blog_id)
      }



     
}
