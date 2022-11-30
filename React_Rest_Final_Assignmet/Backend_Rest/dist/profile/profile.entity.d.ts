import { BaseEntity } from "typeorm";
export declare class ProfileEntity extends BaseEntity {
    profile_id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    city: string;
    state: string;
    country: string;
    pcode: string;
    dob: Date;
    gender: string;
}
