//export class Article {}
import { Message, Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MessageEntity implements Message {
  @ApiProperty()
  id: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  time: string;

  @ApiProperty()
  messageId: string;

  @ApiProperty()
  conversationId: string;

  @ApiProperty({ required: false })
  url: string;

  @ApiProperty({ required: false })
  geo: Prisma.JsonValue;

  @ApiProperty({ required: false })
  message: string;

  @ApiProperty({ required: false })
  variables: string;

  @ApiProperty({ required: false })
  send: boolean;

  @ApiProperty({ required: false })
  active: boolean;
}
