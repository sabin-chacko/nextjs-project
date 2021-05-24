import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
export class updateTodoDto {

    @ApiProperty()  
    todo_item: string;
  
    @ApiProperty({enum:["Pending","InProgress","Completed"]})    
    status: string;
    
}

export class todoitemdto{
    todo_item: string;
    status: string;
    User_id: string;
    constructor(updateTodoDto:updateTodoDto,userid:string){
        this.todo_item = updateTodoDto.todo_item
        this.status = updateTodoDto.status
        this.User_id = userid
    }
}