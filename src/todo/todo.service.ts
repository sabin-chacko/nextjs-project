import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { updateTodoDto, todoitemdto } from './dto/todo.dto'


@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private tododataModel: Model<TodoDocument>) {}
  async create(todoitemdto: todoitemdto): Promise<Todo> {
    const createdTodo = new this.tododataModel(todoitemdto);
    return createdTodo.save();
  }


  async findAll(userid:string): Promise<Todo[]> {
    return await this.tododataModel.find({"User_id":userid}).exec();
  }

  async updatetodo(id:string,updateTodoDto: updateTodoDto):Promise<Todo>{
      // return await this.tododataModel.findOneAndUpdate(todoitemdto)
      return await this.tododataModel.findByIdAndUpdate(id,updateTodoDto)
  }
  async findone(id:string):Promise<Todo>{
    return await this.tododataModel.findById(id)
  }
}
