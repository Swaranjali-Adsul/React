import { BlogEntity } from "src/blog/blog.entity";
import { CommentEntity } from "src/comment/comment.entity";
import { BaseEntity } from "typeorm";
export declare class UserEntity extends BaseEntity {
    user_id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    city: string;
    state: string;
    country: string;
    pcode: string;
    dob: Date;
    gender: string;
    blogs: BlogEntity[];
    comments: CommentEntity[];
}
