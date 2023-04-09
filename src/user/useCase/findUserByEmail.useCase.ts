import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepositoryInterface } from 'src/user/domain/user.repository.interface';

@Injectable()
export class FindUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepositoryInterface) {}

  async execute(email: string): Promise<User> {
    return await this.userRepository.findUserByEmail(email);
  }
}
