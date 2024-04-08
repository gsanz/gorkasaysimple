import { Module } from '@nestjs/common';
import { MessagePrismaRepository } from './infrastructure/repositories/message.prisma.repository';
import { SYMBOLS } from './infrastructure/symbols';
import { MessageController } from './infrastructure/controllers/message.controller';
import { SendService } from './infrastructure/service/send.usecase';
import { ReceiveService } from './infrastructure/service/receive.usecase';
import { GetMessagesService } from './infrastructure/service/getmessages.usecase';
import { UpdateService } from './infrastructure/service/update.usecase';
import { DeleteService } from './infrastructure/service/delete.usecase';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [
    {
      provide: SYMBOLS.MESSAGE_REPOSITORY,
      useClass: MessagePrismaRepository,
    },
    SendService,
    ReceiveService,
    GetMessagesService,
    UpdateService,
    DeleteService,
    MessagePrismaRepository,
  ],
})
export class MessageModule {}
