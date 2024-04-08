import { BadRequestException, Inject } from '@nestjs/common';
import { SYMBOLS } from '../infrastructure/symbols';
import { UserRepository } from '../domain/repositories/user.repository';
import { User, UserDto } from '../domain/entities/user.entity';

export class UpdateUserUsecase {
  constructor(
    @Inject(SYMBOLS.USER_REPOSITORY) readonly userRepository: UserRepository,
  ) {}

  async run(id: string, userDto: UserDto): Promise<User> {
    const userId = await this.userRepository.getUserById(id);
    if (!userId) {
      throw new BadRequestException('The user does not exist');
    }
    const user = new User(userDto);
    return this.userRepository.update(id, user);
  }
}
