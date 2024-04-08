import { Message as MessageDB } from '@prisma/client';
import { PrismaRepository } from 'src/shared/database/prisma-repository';
import { MessageRepository } from 'src/message/domain/repositories/message.repository';
import { InputMessage } from 'src/message/types/message';
import { Message } from 'src/message/domain/entities/message.entity';

export class MessagePrismaRepository
  extends PrismaRepository
  implements MessageRepository
{
  private readonly messages = this.getClient().message;
  create(inputMessage: InputMessage): Promise<Message> {
    return this.messages.create({ data: inputMessage });
  }

  async getAllMessages(): Promise<Message[]> {
    const messagesDB = await this.messages.findMany({
      where: { active: true },
    });

    const messages: Message[] = [];
    for (let i = 0; i < messagesDB.length; i++) {
      messages.push(this.mapperDtoToMessage(messagesDB[i]));
    }
    return messages;
  }

  async getAllSentMessages(): Promise<Message[]> {
    const messagesDB = await this.messages.findMany({
      where: { active: true, send: true },
    });

    const messages: Message[] = [];
    for (let i = 0; i < messagesDB.length; i++) {
      messages.push(this.mapperDtoToMessage(messagesDB[i]));
    }
    return messages;
  }

  async getAllReceivedMessages(): Promise<Message[]> {
    const messagesDB = await this.messages.findMany({
      where: { active: true, send: false },
    });

    const messages: Message[] = [];
    for (let i = 0; i < messagesDB.length; i++) {
      messages.push(this.mapperDtoToMessage(messagesDB[i]));
    }
    return messages;
  }

  async getMessageById(id: string): Promise<Message> {
    return await this.getClient().message.findUnique({
      where: { active: true, id: id },
    });
  }

  async delete(id: string): Promise<Message> {
    const messageDB = await this.messages.update({
      where: {
        id: id,
      },
      data: {
        active: false,
      },
    });
    return this.mapperDtoToMessage(messageDB);
  }

  async update(id: string, inputMessage: InputMessage): Promise<Message> {
    const messageDB = await this.messages.update({
      where: {
        id: id,
      },
      data: inputMessage,
    });
    return this.mapperDtoToMessage(messageDB);
  }

  private mapperDtoToMessage(message: MessageDB): Message {
    return {
      id: message.id,
      type: message.type,
      status: message.status,
      time: message.type,
      messageId: message.messageId,
      conversationId: message.conversationId,
      url: message.url,
      geo: message.geo,
      message: message.message,
      variables: message.variables,
      send: message.send,
    };
  }
}
