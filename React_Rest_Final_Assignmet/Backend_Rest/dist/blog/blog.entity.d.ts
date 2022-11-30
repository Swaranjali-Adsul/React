import { CommentEntity } from "src/comment/comment.entity";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { UserEntity } from "src/user/user.entity";
export declare class BlogEntity extends BaseEntity {
    blog_id: number;
    user_id: number;
    title: string;
    contents: string;
    tags: string;
    date: Date;
    like: number;
    dislike: number;
    ratings: number;
    user: UserEntity;
    comments: CommentEntity[];
}
