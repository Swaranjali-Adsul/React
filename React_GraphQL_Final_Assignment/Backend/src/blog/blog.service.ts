import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { Repository ,Like} from 'typeorm';
import { BlogEntity } from './blog.entity';


@Injectable()
export class BlogService {

    constructor(
      @InjectRepository(BlogEntity)
      private blogRepository:Repository<BlogEntity>,
       @InjectRepository(UserEntity)
      private userRepository:Repository<UserEntity>)
    {

    }

   //Add blog
   async createBlog (user_id:number,title:string,contents:string,tags:string)
   {
      const user=await this.userRepository.findOneBy({user_id})
      const newDate=new Date().toLocaleDateString()
      if(!user)
      {
         throw new NotFoundException()
      }
      const blog=this.blogRepository.create()

      blog.user_id=user_id
      blog.title=title
      blog.contents=contents
      blog.tags=tags
      blog.date=new Date(newDate)
      blog.user=user
      
      
    
      await blog.save()
    
      return blog  
   }

   async getBlog(blog_id:number)
   {
      const blog=await this.blogRepository.findOne({relations:['user','comments'],where:{blog_id}})

      if(!blog)
      {
            throw new NotFoundException()
      }

      return blog
   }
   //get blog by id
   getBlogDetails(id:number)
   {
     return this.getBlog(id)
   }

   //get all blogs
   async getBlogs()
   {
      const blogs= await this.blogRepository.find({relations:['user']})
      return blogs
   }

   //update blog status
   async updateBlog(
       user_id:number,
       blog_id:number,
       title:string,
       contents:string,
       tags:string
      )
   {
      const blog=await this.blogRepository.findOne({where:{user_id,blog_id}})
   //   const blog=await this.getBlog(blog_id)
     if(!blog )
     {
      throw new NotFoundException("Blog not found")
     }
const updateBlog=await this.blogRepository.createQueryBuilder().update(blog).set({title:title,contents:contents,tags:tags}).where('blog_id=:blog_id',{blog_id}).execute()
    
     

     return this.getBlog(blog_id)
   }

   //delete a blog
   async deleteBlog(user_id:number,blog_id:number)
   {
      const blog=await this.blogRepository.findOne({where:{user_id,blog_id}})
  console.log(blog)
      if(!blog )
     {
      throw new NotFoundException("Blog or user not found")
     }
     await this.blogRepository.remove(blog)

    return this.getBlogs()

   }

   //search a blog
  

   async search(tags:string)
    {



const blogs = await this.blogRepository.createQueryBuilder('blog').leftJoinAndSelect("blog.user", "user").where("tags LIKE :tags", {tags: `%${tags}%`}).getMany();
     
if(!blogs)
      {
         throw new NotFoundException();
      }
     return blogs
     }


     async likes(blog_id:number)
     {
      const blog=await this.getBlog(blog_id)
      blog.like+=1
      await blog.save()
     return this.getBlogs()
   
     }
      
     async dislikes(blog_id:number)
     {
      const blog=await this.getBlog(blog_id)
      blog.dislike+=1
      await blog.save()
     return this.getBlogs()
     }
   
}
