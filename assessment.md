# Objective
Your task is to build a simple API for receiving and sending messages based on the types on the bottom of this document. This includes formatting, authentication and the database architecture.

# Assessment
- Setup new NestJS project with the following endpoint functions:
  - Receiving a new message:
    - Should accept IncomingMessage.
    - Should return an object with a generated id and the IncomingMessage. 
  - Sending a new message:
    - Should accept OutgoingMessage.
    - Should return an object with a generated id and the OutgoingMessage.
  - Optionally: Receive a status update for a message:
    - Should return an object the updated result.
- Setup authentication for all the endpoints:
  - Sending messages needs to have a separate set of credentials.

# Evaluation Criteria
- Database structure with database engine of your choice:
  - Preferably a relational database.
  - Alternatively, provide us with a diagram.
- Make sure to use at least one design pattern.
- Get content type & file name from url when receiving or sending attachment messages.
- Endpoints should return the correct status code.

# Bonus Points (Optional)
- Make sure incoming messages are authenticated with an API key and the outgoing messages are authenticated with an JWT.
- Add the endpoint that will update the status of a message.
- Use a Geo API to fetch information (name, address, etc) for LocationMessages.
- Dockerize the project.

# Questions and Assistance

If you have any questions or need assistance at any stage of this assessment, please feel free to reach out to dev@saysimple.com.

# Types

```
type BaseMessage = {
    type: string;
    status: "pending" | "received" | "sent";
    time: string;
    messageId: string;
    conversationId: string;
}


type AttachmentMessage = BaseMessage & {
    type: "attachment";
    url: string;
}

type LocationMessage = BaseMessage & {
    type: "location";
    geo: {
        name: string;
        lat: number;
        long: number;
    }
}

type TextMessage = BaseMessage & {
    type: "text";
    message: string;
}

type TemplateMessage = BaseMessage & {
    type: "template";
    message: string; // Uses double handlebars, e.g. "Hello {{ name }}, this is a message"
    variables: Record<string, string>;
}

type IncomingMessage = AttachmentMessage | LocationMessage | TextMessage;

type OutgoingMessage = TemplateMessage | AttachmentMessage | LocationMessage | TextMessage;
```
