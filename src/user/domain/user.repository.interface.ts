import { User } from '@prisma/client';

export abstract class UserRepositoryInterface {
  abstract findUserById(id: number): Promise<User>;
  abstract findUserByEmail(email: string): Promise<User>;
  abstract createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User>;
}
