import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserUsecase } from 'src/user/application/create.usecase';
import { DeleteUserUsecase } from 'src/user/application/delete.usecase';
import { UpdateUserUsecase } from 'src/user/application/update.usecase';
import { GetUserUsecase } from 'src/user/application/get.usecase';
import { User } from 'src/user/domain/entities/user.entity';
import { UserInputDto } from 'src/user/dto/user.input.dto';

@Controller('/user')
export class UserController {
  constructor(
    private createUserUsecase: CreateUserUsecase,
    private deleteUserUsecase: DeleteUserUsecase,
    private updateUserUsecase: UpdateUserUsecase,
    private getUserUsecase: GetUserUsecase,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createUser(@Body() userInputDto: UserInputDto): Promise<string> {
    const userId = await this.createUserUsecase.run(userInputDto);
    return userId;
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    const user = await this.deleteUserUsecase.run(id);
    return user;
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async updateUser(
    @Body() userInputDto: UserInputDto,
    @Param('id') id: string,
  ): Promise<User> {
    const userId = await this.updateUserUsecase.run(id, userInputDto);
    return userId;
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async getAllUser(): Promise<any> {
    return await this.getUserUsecase.run();
  }
}
