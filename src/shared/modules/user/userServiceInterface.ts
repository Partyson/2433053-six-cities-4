import { DocumentType } from '@typegoose/typegoose';
import { UserEntity } from './userEntity.js';
import { CreateUserDto } from './dto/createUserDto.js';

export interface UserService {
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
  findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
}
