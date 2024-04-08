import { PrismaClient } from '@prisma/client';

import { v4 as uuidv4 } from 'uuid';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const message1 = await prisma.message.upsert({
    where: { id: uuidv4() },
    update: {},
    create: {
      type: 'template',
      status: 'estado1',
      time: '06/04/2024 16:55',
      messageId: '236543',
      conversationId: '51',
      url: 'http://www.upv.es',
      message: 'Hello {{ name }}, this is a message',
      variables: JSON.stringify({
        test1: 'uno',
        test2: 'dos',
        test3: 'tres',
        test4: 'cuatro',
      }),
    },
  });

  const message2 = await prisma.message.upsert({
    where: { id: uuidv4() },
    update: {},
    create: {
      type: 'attachment',
      status: 'received',
      time: '01-04-2024',
      messageId: 'message5',
      conversationId: 'conversation3',
      geo: {
        name: 'coordinates',
        lat: 18.52,
        long: 23.51,
      },
    },
  });

  const message3 = await prisma.message.upsert({
    where: { id: uuidv4() },
    update: {},
    create: {
      type: 'attachment',
      status: 'pending',
      time: '01-04-2024',
      messageId: 'message5',
      conversationId: 'conversation3',
      url: 'http://www.elpais.es',
      geo: {
        name: 'coordinates',
        lat: 18.52,
        long: 23.51,
      },
      message: 'this is a new message',
      variables: JSON.stringify({
        test1: 'uno',
        test2: 'dos',
        test3: 'tres',
        test4: 'cuatro',
      }),
    },
  });

  const message4 = await prisma.message.upsert({
    where: { id: uuidv4() },
    update: {},
    create: {
      type: 'attachment',
      status: 'pending',
      time: '01-04-2024',
      messageId: 'message5',
      conversationId: 'conversation3',
      url: 'http://www.elpais.es',
    },
  });

  const user1 = await prisma.user.upsert({
    where: { id: uuidv4() },
    update: {},
    create: {
      firstname: 'Clara',
      lastname: 'Perez Lopez',
      email: 'cperez@gmail.com',
      password: '48514520Eg',
    },
  });

  console.log({ message1, message2, message3, message4, user1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
