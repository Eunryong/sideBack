import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(CreateUserDto: CreateUserDto) {
    await this.usersRepository.save(CreateUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({
      userId: id,
    });
  }

  async update(id: string, user: UpdateUserDto) {
    const prevUser = await this.usersRepository.findOneBy({
      userId: id,
    });
    let userToUpdate = { ...prevUser, ...user };
    await this.usersRepository.save(userToUpdate);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
