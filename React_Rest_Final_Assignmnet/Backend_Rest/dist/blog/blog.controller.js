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
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
let BlogController = class BlogController {
    constructor(blogService) {
        this.blogService = blogService;
    }
    createBlog(user_id, createBlogDto) {
        return this.blogService.createBlog(user_id, createBlogDto);
    }
    getBlogDetails(id) {
        return this.blogService.getBlogDetails(id);
    }
    getBlogs() {
        return this.blogService.getBlogs();
    }
    updateBlog(user_id, blog_id, createBlogDto) {
        return this.blogService.updateBlog(user_id, blog_id, createBlogDto);
    }
    deleteBlog(user_id, blog_id) {
        return this.blogService.deleteBlog(user_id, blog_id);
    }
    search(tags) {
        return this.blogService.search(tags);
    }
    likes(id) {
        return this.blogService.likes(id);
    }
    dislikes(blog_id) {
        return this.blogService.dislikes(blog_id);
    }
};
__decorate([
    (0, common_1.Post)(':user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createBlog", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogDetails", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogs", null);
__decorate([
    (0, common_1.Put)(':user_id/:blog_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Param)('blog_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateBlog", null);
__decorate([
    (0, common_1.Delete)(':user_id/:blog_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Param)('blog_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "deleteBlog", null);
__decorate([
    (0, common_1.Post)('search/:tags'),
    __param(0, (0, common_1.Param)('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "search", null);
__decorate([
    (0, common_1.Patch)('likes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "likes", null);
__decorate([
    (0, common_1.Patch)('dislikes/:blog_id'),
    __param(0, (0, common_1.Param)('blog_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "dislikes", null);
BlogController = __decorate([
    (0, common_1.Controller)('blog'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map