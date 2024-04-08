import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from '../../entity/auth.entity';
import { UserRepository } from 'src/user/domain/repositories/user.repository';
import { SYMBOLS } from 'src/user/infrastructure/symbols';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(SYMBOLS.USER_REPOSITORY) readonly userRepository: UserRepository,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
