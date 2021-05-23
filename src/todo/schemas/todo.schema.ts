import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Agent } from 'http';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({type:mongoose.Schema.Types.ObjectId})
  id: string;
  
  @Prop({ required: true })
  todo_item: string;

  @Prop({ required: true })
  User_id: string;

  @Prop({type: String,enum:["Pending","InProgress","Completed"]})
  status: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);