import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfiguration } from './config/typeorm.configuration';
import { CommentModule } from './comment/comment.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    UserModule, 
    BlogModule,
    CommentModule,
    TypeOrmModule.forRoot(TypeORMConfiguration), CommentModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile:true
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
