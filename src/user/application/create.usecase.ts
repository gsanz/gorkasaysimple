import { BadRequestException, Inject } from '@nestjs/common';
import { SYMBOLS } from '../infrastructure/symbols';
import { UserRepository } from '../domain/repositories/user.repository';
import { User, UserDto } from '../domain/entities/user.entity';

export class CreateUserUsecase {
  constructor(
    @Inject(SYMBOLS.USER_REPOSITORY) readonly userRepository: UserRepository,
  ) {}

  async run(userDto: UserDto): Promise<string> {
    const user = new User(userDto);

    const userEmail = await this.userRepository.getUserByEmail(userDto.email);
    if (userEmail) {
      throw new BadRequestException('The user email already exists');
    }

    /*const userDni = await this.userRepository.getUserByDni(userDto.dni);
    if (userDni) {
      throw new BadRequestException('The user DNI  already exists ');
    }

    const userNickname = await this.userRepository.getUserByNickname(
      userDto.nickname,
    );*/
    /*if (userNickname) {
      throw new BadRequestException('The user nickname  already exists');
    }*/

    return this.userRepository.create(user);
  }
}
