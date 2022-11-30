import { CreateProfileDto } from 'src/user/dto/profile.dto';
import { Repository } from 'typeorm';
import { ProfileEntity } from './profile.entity';
export declare class ProfileService {
    private profileRepository;
    constructor(profileRepository: Repository<ProfileEntity>);
    profile(createprofileDto: CreateProfileDto): Promise<ProfileEntity>;
}
