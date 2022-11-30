import { Repository } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { CreateBlogDto } from "./dto/create.blog.dto";
export declare class BlogRepository extends Repository<BlogEntity> {
    createBlog(createBlogDto: CreateBlogDto): Promise<BlogEntity>;
    getBlogDetails(id: number): void;
    getBlogs(): void;
    updateBlog(id: number, status: string): void;
    deleteBlog(id: number): void;
}
