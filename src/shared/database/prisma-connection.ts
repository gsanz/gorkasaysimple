import { PrismaClient } from '@prisma/client';

export class PrismaConnection {
  static client?: PrismaClient;

  static getClient() {
    if (!this.client) {
      const prisma = new PrismaClient();
      this.client = prisma;
    }
    return this.client;
  }
}
