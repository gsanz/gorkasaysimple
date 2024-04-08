import { User as UserDb } from '@prisma/client';
import { PrismaRepository } from 'src/shared/database/prisma-repository';
import { User, User as UserEntity } from 'src/user/domain/entities/user.entity';
import { UserModel } from 'src/user/domain/model/user.model';
import { UserRepository } from 'src/user/domain/repositories/user.repository';

export class UserPrismaRepository
  extends PrismaRepository
  implements UserRepository
{
  private readonly users = this.getClient().user;

  async create(user: UserEntity): Promise<string> {
    const userDb = this.mapperEntityToModel(user);

    const createdUserDb = await this.users.create({
      data: userDb,
    });
    return createdUserDb.id;
  }

  async getUserByEmail(email: string): Promise<User> {
    const userDB = await this.users.findUnique({
      where: { email: email },
    });
    return userDB ? this.mapperDtoToUser(userDB) : undefined;
  }

  async getUserById(id: string): Promise<User> {
    const userDB = await this.users.findUnique({
      where: { id: id },
    });
    return userDB ? this.mapperDtoToUser(userDB) : undefined;
  }

  async getAllUsers(): Promise<User[]> {
    const usersDB = await this.users.findMany({
      where: { active: true },
    });

    const users: User[] = [];
    for (let i = 0; i < usersDB.length; i++) {
      users.push(this.mapperDtoToUser(usersDB[i]));
    }
    return users;
  }

  async delete(id: string): Promise<User> {
    const userDB = await this.users.update({
      where: {
        id: id,
      },
      data: {
        active: false,
      },
    });
    return this.mapperDtoToUser(userDB);
  }

  async update(id: string, user: UserEntity): Promise<User> {
    const userDB = await this.users.update({
      where: {
        id: id,
      },
      data: this.mapperEntityToModel(user),
    });
    return this.mapperDtoToUser(userDB);
  }

  private mapperEntityToModel(user: UserEntity): UserModel {
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      active: user.active,
    };
  }

  private mapperDtoToUser(user: UserDb): User {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      active: user.active,
    };
  }
}
