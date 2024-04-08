import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './infraestructure/services/auth.service';
import { AuthController } from './infraestructure/controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserPrismaRepository } from 'src/user/infrastructure/repositories/user.prisma.repository';
import { SYMBOLS } from 'src/user/infrastructure/symbols';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '5m' }, // e.g. 7d, 24h
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: SYMBOLS.USER_REPOSITORY,
      useClass: UserPrismaRepository,
    },
  ],
})
export class AuthModule {}
