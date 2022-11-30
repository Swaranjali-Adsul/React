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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const typeorm_2 = require("typeorm");
const blog_entity_1 = require("./blog.entity");
let BlogService = class BlogService {
    constructor(blogRepository, userRepository) {
        this.blogRepository = blogRepository;
        this.userRepository = userRepository;
    }
    async createBlog(user_id, createBlogDto) {
        const user = await this.userRepository.findOneBy({ user_id });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const blog = this.blogRepository.create();
        blog.user_id = user_id;
        blog.title = createBlogDto.title;
        blog.contents = createBlogDto.contents;
        blog.tags = createBlogDto.tags;
        blog.date = new Date();
        blog.user = user;
        await blog.save();
        return blog;
    }
    async getBlog(blog_id) {
        const blog = await this.blogRepository.findOne({ relations: ['user', 'comments'], where: { blog_id } });
        if (!blog) {
            throw new common_1.NotFoundException();
        }
        return blog;
    }
    getBlogDetails(id) {
        return this.getBlog(id);
    }
    async getBlogs() {
        return await this.blogRepository.find({ relations: ['user'] });
    }
    async updateBlog(user_id, blog_id, createBlogDto) {
        const blog = await this.blogRepository.findOne({ where: { user_id, blog_id } });
        if (!blog) {
            throw new common_1.NotFoundException("Blog not found");
        }
        const updateBlog = await this.blogRepository.createQueryBuilder().update(blog).set({ title: createBlogDto.title, contents: createBlogDto.contents, tags: createBlogDto.tags }).where('blog_id=:blog_id', { blog_id }).execute();
        return this.getBlog(blog_id);
    }
    async deleteBlog(user_id, blog_id) {
        const blog = await this.blogRepository.findOne({ where: { user_id, blog_id } });
        console.log(blog);
        if (!blog) {
            throw new common_1.NotFoundException("Blog or user not found");
        }
        await this.blogRepository.remove(blog);
        return this.getBlogs();
    }
    async search(tags) {
        const blogs = await this.blogRepository.createQueryBuilder('blog').leftJoinAndSelect("blog.user", "user").where("tags LIKE :tags", { tags: `%${tags}%` }).getMany();
        if (!blogs) {
            throw new common_1.NotFoundException();
        }
        return blogs;
    }
    async likes(id) {
        const blog = await this.getBlog(id);
        blog.like += 1;
        await blog.save();
        return this.getBlogs();
    }
    async dislikes(blog_id) {
        const blog = await this.getBlog(blog_id);
        blog.dislike += 1;
        await blog.save();
        return this.getBlogs();
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(blog_entity_1.BlogEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map