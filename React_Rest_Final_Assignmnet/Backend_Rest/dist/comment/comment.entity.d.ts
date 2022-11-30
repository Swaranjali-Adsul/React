import { BlogEntity } from "src/blog/blog.entity";
import { UserEntity } from "src/user/user.entity";
import { BaseEntity } from "typeorm/repository/BaseEntity";
export declare class CommentEntity extends BaseEntity {
    comment_id: number;
    user_id: number;
    blog_id: number;
    comments: string;
    date: Date;
    users: UserEntity;
    blogs: BlogEntity;
}
