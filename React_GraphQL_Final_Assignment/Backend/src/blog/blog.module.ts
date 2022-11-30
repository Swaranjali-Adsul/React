import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { BlogEntity } from './blog.entity';
import { BlogResolver } from './blog.resolver';
import { BlogService } from './blog.service';
import { Blog } from './types/blog.type';

@Module({
  imports:[TypeOrmModule.forFeature([BlogEntity,UserEntity])],
    providers:[BlogService,BlogResolver]
})
export class BlogModule {}
