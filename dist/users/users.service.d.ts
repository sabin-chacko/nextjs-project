import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(CreateUserDto: CreateUserDto): Promise<User>;
    findOne(username: string): Promise<User>;
    findAll(): Promise<User[]>;
}
