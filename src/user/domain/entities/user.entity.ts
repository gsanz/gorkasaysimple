export class User {
  readonly id?: string;
  readonly firstname: string;
  readonly lastname?: string;
  readonly email: string;
  readonly password: string;
  readonly active: boolean;

  constructor(userDto: UserDto) {
    this.id = userDto.id;
    this.firstname = userDto.firstname;
    this.lastname = userDto.lastname;
    this.email = userDto.email;
    this.password = userDto.password;
    this.active = userDto.active;
  }
}

export interface UserDto {
  readonly id?: string;
  readonly firstname: string;
  readonly lastname?: string;
  readonly password: string;
  readonly email: string;
  readonly active: boolean;
}
