import { BaseEntity } from "typeorm";
export declare class ProfileEntity extends BaseEntity {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    city: string;
    state: string;
    country: string;
    pcode: string;
    dob: string;
    gender: string;
}
