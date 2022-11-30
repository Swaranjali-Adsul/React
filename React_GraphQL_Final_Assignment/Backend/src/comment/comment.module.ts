import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blog/blog.entity';
import { UserEntity } from 'src/user/user.entity';
import { CommentEntity } from './comment.entity';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';


@Module({
  imports:[TypeOrmModule.forFeature([BlogEntity,UserEntity,CommentEntity])],
  providers: [CommentService,CommentResolver]
})
export class CommentModule {}
