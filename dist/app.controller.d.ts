import { AuthService } from './auth/auth.service';
import { CreateUserDto, LoginUserDto } from './users/dto/user.dto';
import { updateTodoDto } from './todo/dto/todo.dto';
import { UsersService } from './users/users.service';
import { TodoService } from './todo/todo.service';
export declare class AppController {
    private authService;
    private usersService;
    private todoService;
    constructor(authService: AuthService, usersService: UsersService, todoService: TodoService);
    login(LoginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
    getalluser(req: any): Promise<import("./users/schemas/user.schema").User[]>;
    registerUser(CreateUserDto: CreateUserDto): Promise<import("./users/schemas/user.schema").User>;
    createtodo(req: any, updateTodoDto: updateTodoDto): Promise<import("./todo/schemas/todo.schema").Todo>;
    updatetodo(params: any, req: any, updateTodoDto: updateTodoDto): Promise<import("./todo/schemas/todo.schema").Todo>;
    Alltodo(req: any): Promise<import("./todo/schemas/todo.schema").Todo[]>;
}
