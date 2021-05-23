import { Controller, Get, Request, Body, Post, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto, LoginUserDto } from './users/dto/user.dto'
import { updateTodoDto ,todoitemdto} from './todo/dto/todo.dto'
import { UsersService } from './users/users.service'
import { ApiBearerAuth } from '@nestjs/swagger';
import { TodoService } from './todo/todo.service';
 
@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private todoService: TodoService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() LoginUserDto:LoginUserDto) {
    return this.authService.login(LoginUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('getalluser')
  getalluser(@Request() req){
    return this.usersService.findAll()
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('registeruser')
  registerUser(@Body() CreateUserDto:CreateUserDto) {
    return this.usersService.create(CreateUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('createtodo')
  createtodo(@Request() req,@Body() updateTodoDto:updateTodoDto) {
    var user = this.usersService.findOne(req.user.username)
    var todoitem = new todoitemdto( updateTodoDto,user["_id"])
    return this.todoService.create(todoitem);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('updatetodo/:id')
  updatetodo(@Param() params ,@Request() req,@Body() updateTodoDto:updateTodoDto) {
    var user = this.usersService.findOne(req.user.username)
    var todoitem = new todoitemdto(updateTodoDto,user["_id"])
    return this.todoService.updatetodo(todoitem);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('Alltodos')
  Alltodo(@Request() req) {
    var user = this.usersService.findOne(req.user.username)
    console.log(this.usersService.findOne(req.user.username))
    console.log(user["_id"])
    return this.todoService.findAll(user['_id']);
  }
}