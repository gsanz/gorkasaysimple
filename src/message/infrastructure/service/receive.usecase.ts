import { Injectable } from '@nestjs/common';
import { MessagePrismaRepository } from '../repositories/message.prisma.repository';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';
import { IncomingMessage, OutOutgoingMessage } from 'src/message/types/message';
import { Message } from '@prisma/client';

@Injectable()
export class ReceiveService {
  constructor(private messagePrismaRepository: MessagePrismaRepository) {}
  run(createMessageDto: CreateMessageDto) {
    return this.messagePrismaRepository.create(
      this.mapperDtotoMessage(createMessageDto),
    );
  }

  mapperDtotoMessage(createMessageDto: CreateMessageDto): IncomingMessage {
    return <IncomingMessage>{
      type: createMessageDto.type,
      status: createMessageDto.status,
      time: createMessageDto.time,
      messageId: createMessageDto.messageId,
      conversationId: createMessageDto.conversationId,
      url: createMessageDto.url,
      geo: createMessageDto.geo,
      message: createMessageDto.message,
      variables: JSON.stringify(createMessageDto.variables),
      send: true,
    };
  }

  mappertoOutInComingMessage(message: Message): OutOutgoingMessage {
    return <OutOutgoingMessage>{
      id: message.id,
      incomingMessage: {
        type: message.type,
        status: message.status,
        time: message.time,
        messageId: message.messageId,
        conversationId: message.conversationId,
        url: message.url,
        geo: message.geo,
        message: message.message,
        variables: JSON.stringify(message.variables),
      },
    };
  }
}
