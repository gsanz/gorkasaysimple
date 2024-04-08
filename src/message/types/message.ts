enum status {
  pending,
  received,
  sent,
}

enum type {
  attachment,
  location,
  text,
  template,
}

type BaseMessage = {
  type: type;
  status: status;
  time: string;
  messageId: string;
  conversationId: string;
};

type AttachmentMessage = BaseMessage & {
  type: 'attachment';
  url: string;
};

type LocationMessage = BaseMessage & {
  type: 'location';
  geo: {
    name: string;
    lat: number;
    long: number;
  };
};

type TextMessage = BaseMessage & {
  type: 'text';
  message: string;
};

type TemplateMessage = BaseMessage & {
  type: 'template';
  message: string; // Uses double handlebars, e.g. "Hello {{ name }}, this is a message"
  variables: Record<string, string>;
};

export type IncomingMessage = AttachmentMessage | LocationMessage | TextMessage;

export type OutgoingMessage =
  | TemplateMessage
  | AttachmentMessage
  | LocationMessage
  | TextMessage;

export type InputMessage =
  | IncomingMessage
  | (OutgoingMessage & { send: boolean });

export type OutInComingMessage = {
  id: string;
  incomingMessage: IncomingMessage;
};

export type OutOutgoingMessage = {
  id: string;
  incomingMessage: OutgoingMessage;
};
