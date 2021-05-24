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
exports.TodoService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const todo_schema_1 = require("./schemas/todo.schema");
let TodoService = class TodoService {
    constructor(tododataModel) {
        this.tododataModel = tododataModel;
    }
    async create(todoitemdto) {
        const createdTodo = new this.tododataModel(todoitemdto);
        return createdTodo.save();
    }
    async findAll(userid) {
        return await this.tododataModel.find({ "User_id": userid }).exec();
    }
    async updatetodo(id, updateTodoDto) {
        return await this.tododataModel.findByIdAndUpdate(id, updateTodoDto);
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(todo_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map