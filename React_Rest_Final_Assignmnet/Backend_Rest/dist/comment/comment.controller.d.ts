import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    addComment(user_id: number, blog_id: number, createBlogDto: CreateCommentDto): Promise<import("./comment.entity").CommentEntity[]>;
    getComment(blog_id: number): Promise<import("./comment.entity").CommentEntity[]>;
}
