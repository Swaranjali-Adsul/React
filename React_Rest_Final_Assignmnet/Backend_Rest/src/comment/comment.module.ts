import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { CommentController } from './comment.controller';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';

@Module({
  imports:[TypeOrmModule.forFeature([BlogEntity,UserEntity,CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
