import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { CreateBlogDto } from './dto/create.blog.dto';
export declare class BlogService {
    private blogRepository;
    private userRepository;
    constructor(blogRepository: Repository<BlogEntity>, userRepository: Repository<UserEntity>);
    createBlog(user_id: number, createBlogDto: CreateBlogDto): Promise<BlogEntity>;
    getBlog(blog_id: number): Promise<BlogEntity>;
    getBlogDetails(id: number): Promise<BlogEntity>;
    getBlogs(): Promise<BlogEntity[]>;
    updateBlog(user_id: number, blog_id: number, createBlogDto: CreateBlogDto): Promise<BlogEntity>;
    deleteBlog(user_id: number, blog_id: number): Promise<BlogEntity[]>;
    search(tags: string): Promise<BlogEntity[]>;
    likes(id: number): Promise<BlogEntity[]>;
    dislikes(blog_id: number): Promise<BlogEntity[]>;
}
