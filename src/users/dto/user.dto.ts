import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()  
  phoneNumber: string;
  
  @ApiProperty()
  password: string;
  
  @ApiProperty()
  address: string;
  
  @ApiProperty()  
  dateOfBirth: Date;
  
  @ApiProperty({enum:["Male","Female"]})  
  Age: string;
  }

export class LoginUserDto {

  @ApiProperty()  
  username: string;

  @ApiProperty()    
  password: string;
  }