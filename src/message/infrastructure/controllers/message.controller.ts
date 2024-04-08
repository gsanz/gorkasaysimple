import { ApiCreatedResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SendService } from '../service/send.usecase';
import { MessageEntity } from 'src/message/entities/message.entity';
import { CreateMessageDto } from 'src/message/dto/create-message.dto';
import messageMapper from 'src/message/mappers/message';
import { ReceiveService } from '../service/receive.usecase';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GetMessagesService } from '../service/getmessages.usecase';
import { UpdateService } from '../service/update.usecase';
import { DeleteService } from '../service/delete.usecase';

@Controller('message')
export class MessageController {
  constructor(
    private readonly messageService: SendService,
    private readonly receiveService: ReceiveService,
    private readonly getMessagesService: GetMessagesService,
    private readonly updateService: UpdateService,
    private readonly deleteService: DeleteService,
  ) {}

  @Post('/send')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: MessageEntity })
  receive(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.run(
      messageMapper.mapToIncommingMessage(createMessageDto),
    );
  }

  @Post('/receive')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: MessageEntity })
  send(@Body() createMessageDto: CreateMessageDto) {
    return this.receiveService.run(
      messageMapper.mapToIncommingMessage(createMessageDto),
    );
  }

  @Post('/getall')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: MessageEntity })
  get(@Query('send') send?: boolean) {
    return this.getMessagesService.run(send);
  }

  @Post('/update/:id')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: MessageEntity })
  update(@Param('id') id: string, @Body() createMessageDto: CreateMessageDto) {
    return this.updateService.run(id, createMessageDto);
  }

  @Post('/delete/:id')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: MessageEntity })
  delete(@Param('id') id: string) {
    return this.deleteService.run(id);
  }
}
