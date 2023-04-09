import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepositoryInterface } from 'src/user/domain/user.repository.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(name: string, email: string, password: string): Promise<User> {
    return await this.userRepository.createUser(name, email, password);
  }
}
