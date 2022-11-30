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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_entity_1 = require("../blog/blog.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./comment.entity");
let CommentService = class CommentService {
    constructor(blogRepository, userRepository, commentRepository) {
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
        this.commentRepository = commentRepository;
    }
    async getComment(blog_id) {
        const condition = {
            blog_id: blog_id,
        };
        const comment = await this.commentRepository.createQueryBuilder('comment').where('comment.blog_id=:blog_id ', condition).execute();
        if (!comment) {
            throw new common_1.NotFoundException();
        }
        return await this.commentRepository.find({ where: { blog_id }, relations: ['blogs', 'users'] });
    }
    async addComment(user_id, blog_id, createCommentDto) {
        const user = await this.userRepository.findOneBy({ user_id });
        const blog = await this.blogRepository.findOneBy({ blog_id });
        if (!user || !blog) {
            throw new common_1.NotFoundException();
        }
        const comment = this.commentRepository.create();
        comment.user_id = user_id;
        comment.blog_id = blog_id;
        comment.comments = createCommentDto.comments;
        comment.date = new Date();
        comment.users = user;
        comment.blogs = blog;
        await comment.save();
        return this.getComment(blog_id);
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map