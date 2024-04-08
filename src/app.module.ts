import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MessageModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
