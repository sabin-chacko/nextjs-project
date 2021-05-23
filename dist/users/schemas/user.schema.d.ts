import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    id: mongoose.Schema.Types.ObjectId;
    username: string;
    password: string;
    phoneNumber: string;
    email: string;
    address: string;
    dateOfBirth: Date;
    Age: string;
}
export declare const UserSchema: mongoose.Schema<Document<User, any>, mongoose.Model<any, any, any>, undefined>;
