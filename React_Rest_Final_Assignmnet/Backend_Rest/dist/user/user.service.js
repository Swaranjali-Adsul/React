"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const Crypto = require("crypto-js");
const typeorm_2 = require("@nestjs/typeorm");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async signup(createSignupDto) {
        const user = this.userRepository.create();
        user.firstname = createSignupDto.firstname;
        user.lastname = createSignupDto.lastname;
        user.email = createSignupDto.email;
        user.password = String(Crypto.MD5(createSignupDto.password));
        user.city = createSignupDto.city;
        user.state = createSignupDto.state;
        user.country = createSignupDto.country;
        user.pcode = createSignupDto.pcode;
        user.dob = createSignupDto.dob;
        user.gender = createSignupDto.gender;
        await user.save();
        return user;
    }
    async signin(createSigninDto) {
        const condition = {
            email: createSigninDto.email,
            password: String(Crypto.MD5(createSigninDto.password))
        };
        const user = await this.userRepository.createQueryBuilder('user').where('user.email=:email and user.password=:password', condition).getOne();
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        delete user.password;
        return user;
    }
    async getUserDetails(email, password) {
        const condition = {
            email: email,
            password: String(Crypto.MD5(password))
        };
        const user = await this.userRepository.createQueryBuilder('user').where('user.email=:email and user.password=:password', condition).getOne();
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async updateProfile(user_id, createSignupDto) {
        const user = await this.userRepository.findOne({ where: { user_id } });
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const updateUser = await this.userRepository.createQueryBuilder().update(user).set({ firstname: createSignupDto.firstname,
            lastname: createSignupDto.lastname,
            email: createSignupDto.email,
            password: String(Crypto.MD5(createSignupDto.password)),
            city: createSignupDto.city,
            state: createSignupDto.state,
            country: createSignupDto.country,
            pcode: createSignupDto.pcode,
            dob: createSignupDto.dob,
            gender: createSignupDto.gender }).where('user_id=:user_id', { user_id }).execute();
        return this.getProfile(user_id);
    }
    async getProfile(user_id) {
        const condition = {
            user_id: user_id
        };
        const user = await this.userRepository.createQueryBuilder('user').where('user.user_id=:user_id ', condition).getOne();
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map