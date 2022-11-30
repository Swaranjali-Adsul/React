import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeORMConfiguration:TypeOrmModuleOptions={
    username:'root',
    password:'root',
    port:3306,
    database:'graphql_blog',
    type:'mysql',
    host:'localhost',
    entities:[__dirname+'/../**/*.entity.{ts,js}'],


    synchronize:false
};