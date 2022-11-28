import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create.blog.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    createBlog(user_id: number, createBlogDto: CreateBlogDto): Promise<import("./blog.entity").BlogEntity>;
    getBlogDetails(id: number): Promise<import("./blog.entity").BlogEntity>;
    getBlogs(): Promise<import("./blog.entity").BlogEntity[]>;
    updateBlog(user_id: number, blog_id: number, createBlogDto: CreateBlogDto): Promise<import("./blog.entity").BlogEntity>;
    deleteBlog(user_id: number, blog_id: number): Promise<import("./blog.entity").BlogEntity[]>;
    search(tags: string): Promise<import("./blog.entity").BlogEntity[]>;
    likes(id: number): Promise<import("./blog.entity").BlogEntity[]>;
    dislikes(blog_id: number): Promise<import("./blog.entity").BlogEntity[]>;
}
