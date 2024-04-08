enum type {
  attachment,
  location,
  text,
  template,
}

type BaseMessage = {
  type: type;
  time: string;
  messageId: string;
  conversationId: string;
};

type AttachmentMessage = BaseMessage & {
  type: 'attachment';
  url: string;
};

type TextMessage = BaseMessage & {
  type: 'text';
  message: string;
};

export type InputMessage = AttachmentMessage;

const c1: InputMessage = <InputMessage>{
  type: 'attachment',
  time: 'string',
  messageId: 'string',
  conversationId: 'string',
  message: 'esto es una casa',
};
