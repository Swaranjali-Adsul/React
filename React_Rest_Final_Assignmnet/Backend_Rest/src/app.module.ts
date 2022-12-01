import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfiguration } from './config/typeorm.configuration';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, BlogModule,TypeOrmModule.forRoot(TypeORMConfiguration), CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
