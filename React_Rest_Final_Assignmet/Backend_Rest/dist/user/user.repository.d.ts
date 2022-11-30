import { Repository } from "typeorm";
import { CreateSignupDto } from "./dto/signup.dto";
import { UserEntity } from "./user.entity";
import { CreateSigninDto } from "./dto/signin.dto";
export declare class UserRepository extends Repository<UserEntity> {
    signupUser(createSignupDto: CreateSignupDto): Promise<UserEntity>;
    signinUser(createSigninDto: CreateSigninDto): Promise<void>;
}
