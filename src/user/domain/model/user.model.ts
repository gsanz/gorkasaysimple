export type UserModel = {
  readonly id?: string;
  readonly firstname: string;
  readonly lastname?: string;
  readonly password: string;
  readonly email: string;
  readonly active: boolean;
};
