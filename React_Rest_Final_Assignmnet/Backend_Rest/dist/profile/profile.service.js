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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
const Crypto = require("crypto-js");
let ProfileService = class ProfileService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async profile(createprofileDto) {
        const user = this.profileRepository.create();
        user.firstname = createprofileDto.firstname;
        user.lastname = createprofileDto.lastname;
        user.email = createprofileDto.email;
        user.password = String(Crypto.MD5(createprofileDto.password));
        user.city = createprofileDto.city;
        user.state = createprofileDto.state;
        user.country = createprofileDto.country;
        user.pcode = createprofileDto.pcode;
        user.dob = createprofileDto.dob;
        user.gender = createprofileDto.gender;
        await user.save();
        return user;
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.ProfileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map