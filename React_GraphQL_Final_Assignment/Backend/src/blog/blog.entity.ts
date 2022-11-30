import { CommentEntity } from "src/comment/comment.entity";
import { JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { UserEntity } from "src/user/user.entity";
import { timeStamp } from "console";


@Entity('Blog')
export class BlogEntity extends BaseEntity
{
    @PrimaryGeneratedColumn()
    blog_id:number;

  
  @Column()
  user_id:number;


    @Column()
    title:string;
    
    @Column({type:'varchar',length:'1000'})
    contents:string;
    
    @Column({type:'varchar',length:'500'})
    tags:string;

    @Column()
    date:Date;

    @Column({nullable:true,default:0})
    like:number;

    @Column({nullable:true,default:0})
    dislike:number


     @Column({nullable:true})
     ratings:number
  

    @ManyToOne(() => UserEntity,(user)=>user.blogs)
    user:UserEntity;


    @OneToMany(()=>CommentEntity,(comment)=>comment.blogs)
    comments:CommentEntity[]

   
    
}    



