import { CreateProfileDto } from 'src/user/dto/profile.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    profile(createProfileDto: CreateProfileDto): Promise<import("./profile.entity").ProfileEntity>;
}
