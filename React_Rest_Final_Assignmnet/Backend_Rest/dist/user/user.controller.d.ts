import { CreateSigninDto } from './dto/signin.dto';
import { CreateSignupDto } from './dto/signup.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signup(createSingupDto: CreateSignupDto): Promise<import("./user.entity").UserEntity>;
    signin(createSigninDto: CreateSigninDto): Promise<import("./user.entity").UserEntity>;
    getUserDetails(email: string, password: string): Promise<import("./user.entity").UserEntity>;
    updateProfile(user_id: number, createSigupDto: CreateSignupDto): Promise<import("./user.entity").UserEntity>;
    getProfile(user_id: number): Promise<import("./user.entity").UserEntity>;
}
