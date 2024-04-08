import { InputMessage } from 'src/message/types/message';
import { Message } from '../entities/message.entity';

export interface MessageRepository {
  create(message: InputMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  getAllSentMessages(): Promise<Message[]>;
  getAllReceivedMessages(): Promise<Message[]>;
  getMessageById(id: string): Promise<Message>;
  delete(id: string): Promise<Message>;
  update(id: string, inputMessage: InputMessage): Promise<Message>;
}
