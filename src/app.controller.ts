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

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  // @Get('getalluser')
  // getalluser(@Request() req){
  //   return this.usersService.findAll()
  // }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('registeruser')
  registerUser(@Body() CreateUserDto:CreateUserDto) {
    return this.usersService.create(CreateUserDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('createtodo')
  async createtodo(@Request() req,@Body() updateTodoDto:updateTodoDto) {
    var user = await this.usersService.findOne(req.user.username)
    var todoitem = new todoitemdto( updateTodoDto,user["_id"])
    return this.todoService.create(todoitem);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('updatetodo/:id')
  updatetodo(@Param('id') id: string,@Request() req,@Body() updateTodoDto:updateTodoDto) {
    return this.todoService.updatetodo(id,updateTodoDto);
  }
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('Alltodos')
  async Alltodo(@Request() req) {
    const userprom = await this.usersService.findOne(req.user.username)
    return this.todoService.findAll(userprom['_id']);
    // const self = this
    // this.usersService.findOne(req.user.username)
    // .then(function (user){
    //   return self.todoService.findAll(user['_id']);
    // })

  }
}