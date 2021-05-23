import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Agent } from 'http';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

  @Prop()
  id: mongoose.Schema.Types.ObjectId;
  
  @Prop({ required: true })
  username: string;

  @Prop()
  password: string;

  @Prop({ unique: true, required: true })
  phoneNumber: string;

  @Prop({ required: true,unique: true })
  email: string;

  @Prop()
  address: string;

  @Prop({type:Date})
  dateOfBirth: Date;

  @Prop({type: String,enum:["Male","Female"]})
  Age: string;
}

export const UserSchema = SchemaFactory.createForClass(User);