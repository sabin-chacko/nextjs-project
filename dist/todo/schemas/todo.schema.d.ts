import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type TodoDocument = Todo & Document;
export declare class Todo {
    id: string;
    todo_item: string;
    User_id: string;
    status: string;
}
export declare const TodoSchema: mongoose.Schema<Document<Todo, any>, mongoose.Model<any, any, any>, undefined>;
