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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const local_auth_guard_1 = require("./auth/local-auth.guard");
const auth_service_1 = require("./auth/auth.service");
const user_dto_1 = require("./users/dto/user.dto");
const todo_dto_1 = require("./todo/dto/todo.dto");
const users_service_1 = require("./users/users.service");
const swagger_1 = require("@nestjs/swagger");
const todo_service_1 = require("./todo/todo.service");
let AppController = class AppController {
    constructor(authService, usersService, todoService) {
        this.authService = authService;
        this.usersService = usersService;
        this.todoService = todoService;
    }
    async login(LoginUserDto) {
        return this.authService.login(LoginUserDto);
    }
    getalluser(req) {
        return this.usersService.findAll();
    }
    registerUser(CreateUserDto) {
        return this.usersService.create(CreateUserDto);
    }
    createtodo(req, updateTodoDto) {
        var user = this.usersService.findOne(req.user.username);
        var todoitem = new todo_dto_1.todoitemdto(updateTodoDto, user["_id"]);
        return this.todoService.create(todoitem);
    }
    updatetodo(params, req, updateTodoDto) {
        var user = this.usersService.findOne(req.user.username);
        var todoitem = new todo_dto_1.todoitemdto(updateTodoDto, user["_id"]);
        return this.todoService.updatetodo(todoitem);
    }
    Alltodo(req) {
        var user = this.usersService.findOne(req.user.username);
        console.log(this.usersService.findOne(req.user.username));
        console.log(user["_id"]);
        return this.todoService.findAll(user['_id']);
    }
};
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('getalluser'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getalluser", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('registeruser'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "registerUser", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('createtodo'),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, todo_dto_1.updateTodoDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createtodo", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('updatetodo/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Request()), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, todo_dto_1.updateTodoDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updatetodo", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('Alltodos'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "Alltodo", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        todo_service_1.TodoService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map