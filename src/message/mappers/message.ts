import { CreateMessageDto } from '../dto/create-message.dto';
import { IncomingMessage } from '../types/message';

export default class messageMapper {
  public static mapToIncommingMessage(
    message: CreateMessageDto,
  ): IncomingMessage {
    return <IncomingMessage>{
      type: message.type,
      status: message.status,
      time: message.time,
      messageId: message.messageId,
      conversationId: message.conversationId,
      url: message.url,
      geo: message.geo,
      message: message.message,
      variables: message.variables,
    };
  }
}
