import { Repository } from 'typeorm';
import { CreateSigninDto } from './dto/signin.dto';
import { CreateSignupDto } from './dto/signup.dto';
import { UserEntity } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    signup(createSignupDto: CreateSignupDto): Promise<UserEntity>;
    signin(createSigninDto: CreateSigninDto): Promise<UserEntity>;
    getUserDetails(email: any, password: any): Promise<UserEntity>;
    updateProfile(user_id: number, createSignupDto: CreateSignupDto): Promise<UserEntity>;
    getProfile(user_id: number): Promise<UserEntity>;
}
