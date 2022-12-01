import { BlogEntity } from "src/blog/blog.entity";
import { UserEntity } from "src/user/user.entity";
import { JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { BaseEntity } from "typeorm/repository/BaseEntity";


@Entity('Comment')
export class CommentEntity extends BaseEntity
{
    @PrimaryGeneratedColumn()
    comment_id:number;

    @Column()
    user_id:number

    @Column()
    blog_id:number

   
    @Column({type:'varchar',length:'1000',nullable:true})
    comments:string
  
    @Column()
   date:Date

    
    // @OneToMany(() => BlogEntity, (blog) => blog.comments)
    // blogs: BlogEntity[]

    @ManyToOne(() => UserEntity, (user) => user.comments)
    users: UserEntity


    @ManyToOne(()=>BlogEntity,(blog)=>blog.comments)
    blogs:BlogEntity
   


    // @OneToOne(() => ProfileEntity)
    // @JoinColumn({name:'profile_id'})
    // profile: ProfileEntity
    
}    



