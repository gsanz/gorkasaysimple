import { SYMBOLS } from '../infrastructure/symbols';
import { UserRepository } from '../domain/repositories/user.repository';
import { User, UserDto } from '../domain/entities/user.entity';
import { Inject } from '@nestjs/common';

export class GetUserUsecase {
  constructor(
    @Inject(SYMBOLS.USER_REPOSITORY) readonly userRepository: UserRepository,
  ) {}

  async run(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }
}
