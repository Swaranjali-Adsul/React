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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogEntity = void 0;
const comment_entity_1 = require("../comment/comment.entity");
const typeorm_1 = require("typeorm");
const Column_1 = require("typeorm/decorator/columns/Column");
const PrimaryGeneratedColumn_1 = require("typeorm/decorator/columns/PrimaryGeneratedColumn");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const user_entity_1 = require("../user/user.entity");
let BlogEntity = class BlogEntity extends BaseEntity_1.BaseEntity {
};
__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "blog_id", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "user_id", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    (0, Column_1.Column)({ type: 'varchar', length: '1000' }),
    __metadata("design:type", String)
], BlogEntity.prototype, "contents", void 0);
__decorate([
    (0, Column_1.Column)({ type: 'varchar', length: '500' }),
    __metadata("design:type", String)
], BlogEntity.prototype, "tags", void 0);
__decorate([
    (0, Column_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], BlogEntity.prototype, "date", void 0);
__decorate([
    (0, Column_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], BlogEntity.prototype, "like", void 0);
__decorate([
    (0, Column_1.Column)({ nullable: true, default: 0 }),
    __metadata("design:type", Number)
], BlogEntity.prototype, "dislike", void 0);
__decorate([
    (0, Column_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], BlogEntity.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.blogs),
    __metadata("design:type", user_entity_1.UserEntity)
], BlogEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.blogs),
    __metadata("design:type", Array)
], BlogEntity.prototype, "comments", void 0);
BlogEntity = __decorate([
    (0, Entity_1.Entity)('Blog')
], BlogEntity);
exports.BlogEntity = BlogEntity;
//# sourceMappingURL=blog.entity.js.map