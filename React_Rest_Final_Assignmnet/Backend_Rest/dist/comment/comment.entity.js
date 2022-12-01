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
exports.CommentEntity = void 0;
const blog_entity_1 = require("../blog/blog.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
const Column_1 = require("typeorm/decorator/columns/Column");
const PrimaryGeneratedColumn_1 = require("typeorm/decorator/columns/PrimaryGeneratedColumn");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
let CommentEntity = class CommentEntity extends BaseEntity_1.BaseEntity {
};
__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "comment_id", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "user_id", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "blog_id", void 0);
__decorate([
    (0, Column_1.Column)({ type: 'varchar', length: '1000', nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "comments", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.comments),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => blog_entity_1.BlogEntity, (blog) => blog.comments),
    __metadata("design:type", blog_entity_1.BlogEntity)
], CommentEntity.prototype, "blogs", void 0);
CommentEntity = __decorate([
    (0, Entity_1.Entity)('Comment')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map