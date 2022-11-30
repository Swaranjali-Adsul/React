
import { BlogEntity } from "src/blog/blog.entity";
import { CommentEntity } from "src/comment/comment.entity";
import { BaseEntity,Column,PrimaryGeneratedColumn,Entity,Unique, ManyToOne, OneToMany } from "typeorm";


@Entity('User')
@Unique(['email'])
export class UserEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    user_id:number;

    @Column({nullable:true})
    firstname: string;

    @Column({nullable:true})
    lastname: string;
    
    @Column({nullable:true})
    email:string;

    @Column({nullable:true})
    password:string;

    @Column({nullable:true})
    city:string;

    @Column({nullable:true})
    state:string;

    @Column({nullable:true})
    country:string;

    @Column({nullable:true})
    pcode:string;

    @Column({nullable:true})
    dob:Date;

    @Column({nullable:true})
    gender:string;
   
    @OneToMany(() => BlogEntity, (blog) => blog.user)
    blogs: BlogEntity[]

    @OneToMany(() => CommentEntity, (comment) => comment.users)
    comments: CommentEntity[]
    
    // @OneToMany(() => BlogEntity, (blog) => blog.blog_id)
    // users: BaseEntity[]
    
}