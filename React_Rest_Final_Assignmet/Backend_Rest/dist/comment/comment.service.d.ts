import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
export declare class CommentService {
    private blogRepository;
    private userRepository;
    private commentRepository;
    constructor(blogRepository: Repository<BlogEntity>, userRepository: Repository<UserEntity>, commentRepository: Repository<CommentEntity>);
    getComment(blog_id: number): Promise<CommentEntity[]>;
    addComment(user_id: number, blog_id: number, createCommentDto: CreateCommentDto): Promise<CommentEntity[]>;
}
