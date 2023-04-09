import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepositoryInterface } from 'src/user/domain/user.repository.interface';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(id: number): Promise<User> {
    return await this.userRepository.findUserById(id);
  }
}
