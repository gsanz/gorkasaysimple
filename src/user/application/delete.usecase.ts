import { BadRequestException, Inject } from '@nestjs/common';
import { SYMBOLS } from '../infrastructure/symbols';
import { UserRepository } from '../domain/repositories/user.repository';
import { User } from '../domain/entities/user.entity';

export class DeleteUserUsecase {
  constructor(
    @Inject(SYMBOLS.USER_REPOSITORY) readonly userRepository: UserRepository,
  ) {}

  async run(id: string): Promise<User> {
    const userId = await this.userRepository.getUserById(id);
    if (!userId) {
      throw new BadRequestException('The user does not exist');
    }

    return this.userRepository.delete(id);
  }
}
