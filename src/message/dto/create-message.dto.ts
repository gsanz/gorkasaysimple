import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  type: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  time: string;

  @ApiProperty({ required: false })
  messageId: string;

  @ApiProperty({ required: false })
  conversationId: string;

  @ApiProperty({ required: false })
  url?: string;

  @ApiProperty({ required: false })
  geo?: JSON;

  @ApiProperty({ required: false })
  message?: string;

  @ApiProperty({ required: false })
  variables?: Record<string, string>;
}
