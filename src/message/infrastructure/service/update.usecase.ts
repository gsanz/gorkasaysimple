import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { MessagePrismaRepository } from '../repositories/message.prisma.repository';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';
import { IncomingMessage, OutInComingMessage } from 'src/message/types/message';
import { Message } from 'src/message/domain/entities/message.entity';
import { SYMBOLS } from '../symbols';

@Injectable()
export class UpdateService {
  constructor(
    @Inject(SYMBOLS.MESSAGE_REPOSITORY)
    readonly messagePrismaRepository: MessagePrismaRepository,
  ) {}

  async run(id: string, createMessageDto: CreateMessageDto) {
    const message = await this.messagePrismaRepository.getMessageById(id);
    if (!message) {
      throw new BadRequestException('The Message does not exist');
    }

    return this.mappertoOutInComingMessage(
      await this.messagePrismaRepository.update(
        id,
        this.mapperDtotoMessage(createMessageDto),
      ),
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
      send: false,
    };
  }

  mappertoOutInComingMessage(message: Message): OutInComingMessage {
    return <OutInComingMessage>{
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
        variables: message.variables,
        send: message.send,
      },
    };
  }
}
