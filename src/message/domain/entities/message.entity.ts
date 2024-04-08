import { JsonValue } from '@prisma/client/runtime/library';

export class Message {
  id: string;
  type: string;
  status?: string;
  time?: string;
  messageId?: string;
  conversationId?: string;
  url?: string;
  geo?: JsonValue;
  message?: string;
  variables?: string;
  send: boolean;

  constructor(messageDto: MessageDto) {
    this.id = messageDto.id;
    this.type = messageDto.type;
    this.status = messageDto.status;
    this.time = messageDto.time;
    this.messageId = messageDto.messageId;
    this.conversationId = messageDto.conversationId;
    this.url = messageDto.url;
    this.geo = messageDto.geo;
    this.message = messageDto.message;
    this.variables = messageDto.variables;
    this.send = messageDto.send;
  }
}

export interface MessageDto {
  id: string;
  type: string;
  status?: string;
  time?: string;
  messageId?: string;
  conversationId?: string;
  url?: string;
  geo?: JsonValue;
  message?: string;
  variables?: string;
  send: boolean;
}
